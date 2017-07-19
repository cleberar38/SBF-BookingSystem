import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import * as Colors from 'material-ui/styles/colors';
import Auth from '../modules/Auth';

import strings  from './lang_config.jsx';
import default_lang from './default_lang.jsx';
import Searchfunction from './Searchfunction.jsx';
import Header from './Header.jsx';
import Snackbars from './Snackbars.jsx';
import TimeMenu from './TimeMenu.jsx';

strings.setLanguage(default_lang.lang);

const Dashboard = () => (
  <div>
    <Searchfunction />
    <Snackbars />
    <TimeMenu />
  </div>
);

export default Dashboard;
