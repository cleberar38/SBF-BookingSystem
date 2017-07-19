import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Link, IndexLink } from 'react-router';
import strings  from './lang_config.jsx';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {Tabs, Tab} from 'material-ui'
import IconButton from 'material-ui/IconButton';

import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const Header = () => (
  <AppBar
    title={<span style={styles.title}>SBF-Bokningssytem</span>}
    onTitleTouchTap={handleTouchTap}
    iconElementRight={<FlatButton><Link to="/logout">{strings.logout}</Link></FlatButton>}
  />
);

export default Header;
