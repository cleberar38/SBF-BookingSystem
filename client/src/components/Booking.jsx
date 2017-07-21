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



const Dashboard = () => (
  <div>
    <PlacesGrid />
    <Calendar />
    <TimeMenu />
    <div className="button-line center-container">
		<RaisedButton type="submit" label={strings.sendBtn} primary />
	</div>
  </div>
);

export default Dashboard;
