import React from 'react';
import Auth from '../modules/Auth';
import Booking from '../components/Booking.jsx';


class BookingPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    const storedMessage = localStorage.getItem('successMessage');
    let successMessage = '';

    if (storedMessage) {
      successMessage = storedMessage;
      localStorage.removeItem('successMessage');
    }

    this.state = {
      errors: {},
      successMessage,
      booking: {
        user: '',
        daytaken: '',
        plats: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changePlats = this.changePlats.bind(this);
  }

  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message
    const user = encodeURIComponent(this.state.booking.user);
    const daytaken = encodeURIComponent(this.state.booking.daytaken);
    const plats = encodeURIComponent(this.state.booking.plats);
    const formData = `user=${user}&daytaken=${daytaken}&plats=${plats}`;


    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/plats');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });

        // save the token
        Auth.authenticateUser(xhr.response.token);


        // change the current URL to /
        this.context.router.replace('/');
      } else {
        // failure

        // change the component state
        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);
  }

  changePlats(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/booking');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          booking: xhr.response.message
        });
      }
    });
    xhr.send();
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <Booking 
        onSubmit={this.processForm}
        onChange={this.changePlats}
        errors={this.state.errors}
        successMessage={this.state.successMessage}
        booking={this.state.booking} />
    );
  }

}

export default BookingPage;
