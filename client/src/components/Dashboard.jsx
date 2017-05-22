import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

import strings  from './lang_config.jsx';
import default_lang from './default_lang.jsx';

strings.setLanguage(default_lang.lang);


const Dashboard = ({ secretData }) => (
  <Card className="container">
    <CardTitle
      title="Dashboard"
      subtitle= {strings.msg}
    />

    {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}
  </Card>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
