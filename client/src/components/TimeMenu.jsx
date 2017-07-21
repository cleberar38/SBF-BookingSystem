import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  root: {
    left: 550,
  },
};

export default class TimeMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 2};
  }

  handleChange(event, index, value) {
       this.setState({value})
  };

  render() {
    return (
      <DropDownMenu style={styles.root} value={this.state.value} onChange={this.handleChange}>
        <MenuItem value={1} label="06:00 - 10:00" primaryText="06:00 - 10:00" />
        <MenuItem value={2} label="10:00 - 15:00" primaryText="10:00 - 15:00" />
        <MenuItem value={3} label="15:00 - 20:00" primaryText="15:00 - 20:00" />
        <MenuItem value={3} label="20:00 - 24:00" primaryText="20:00 - 24:00" />
        <MenuItem value={3} label="24:00 - 04:00" primaryText="24:00 - 04:00" />
      </DropDownMenu>
    );
  }
}
