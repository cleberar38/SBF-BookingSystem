import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import strings  from './lang_config.jsx';
import default_lang from './default_lang.jsx';

import { AppBar } from 'material-ui/AppBar';

strings.setLanguage(default_lang.lang);

const HomePage = () => (
	
  <Card className="container">
    <CardTitle title={strings.how} subtitle="This is the home page." />
  </Card>
);

export default HomePage;
