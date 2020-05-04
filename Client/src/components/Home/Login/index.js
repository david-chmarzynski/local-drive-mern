import React from 'react';
import PropTypes from 'prop-types';
import { Form, Dimmer, Loader } from 'semantic-ui-react';

import './settings.scss';
import Field from 'src/components/Home/Field';

const Login = ({
  emailValue,
  passwordValue,
  onFieldChange,
  onSubmitBtn,
  loading,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmitBtn();
  };

  const keyPressed = (evt) => {
    if (evt.key === 'Enter') {
      onSubmitBtn();
    }
  };

  return (
    <div id="modale">
      {loading === true && (
        <Dimmer active>
          <Loader>Chargement...</Loader>
        </Dimmer>
      )}
      {loading === false && (
        <Dimmer inactive>
          <Loader>Chargement...</Loader>
        </Dimmer>
      )}
      <div className="settings">
        <h2>Connexion</h2>
        <form className="form-settings" onSubmit={handleSubmit} onKeyPress={keyPressed}>
          <Form>
            <Field
              name="email"
              type="email"
              value={emailValue}
              placeholder="Adresse Email"
              onInputChange={onFieldChange}
            />
            <Field
              name="password"
              type="password"
              value={passwordValue}
              placeholder="Mot de passe"
              onInputChange={onFieldChange}
            />
          </Form>
          <hr />
          <button
            type="submit"
            className="form-settings-submit"
          >
      Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  onSubmitBtn: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Login;
