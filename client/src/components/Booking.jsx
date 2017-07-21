import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import * as Colors from 'material-ui/styles/colors';
import Auth from '../modules/Auth';
import RaisedButton from 'material-ui/RaisedButton';

import strings  from './lang_config.jsx';
import default_lang from './default_lang.jsx';
import PlacesGrid from './PlacesGrid.jsx';
import Calendar from './Calendar.jsx';
import TimeMenu from './TimeMenu.jsx';

strings.setLanguage(default_lang.lang);

const Booking = ({
	onSubmit,
	onChange,
	errors,
	successMessage,
	booking
}) => (
  <div>
  	<form action="/" onSubmit={onSubmit}>
	    <PlacesGrid onChange={onChange} />
	    <Calendar />
	    <TimeMenu />
	    <div className="button-line center-container">
			<RaisedButton type="submit" label={strings.sendBtn} primary />
		</div>
	</form>
  </div>
);

Booking.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  booking: PropTypes.object.isRequired
};

export default Booking;