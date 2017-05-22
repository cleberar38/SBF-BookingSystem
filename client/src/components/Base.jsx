import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';

import strings  from './lang_config.jsx';
import default_lang from './default_lang.jsx';

strings.setLanguage(default_lang.lang);

const Base = ({ children }) => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <IndexLink to="/">{strings.title}</IndexLink>
      </div>

      {Auth.isUserAuthenticated() ? (
        <div className="top-bar-right">
          <Link to="/logout">{strings.logout}</Link>
        </div>
      ) : (
        <div className="top-bar-right">
          <Link to="/login">{strings.login}</Link>
          <Link to="/signup">{strings.signup}</Link>
        </div>
      )}

    </div>

    { /* child component will be rendered here */ }
    {children}

  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
