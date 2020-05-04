import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { Form, Dimmer, Loader } from 'semantic-ui-react';

import './settings.scss';
import Field from 'src/components/Home/Field';

const options = [
  { value: 'boucherie', label: 'boucherie' },
  { value: 'boulangerie', label: 'boulangerie' },
  { value: 'poissonerie', label: 'poissonerie' },
  { value: 'primeur', label: 'primeur', name: 'job' },
  { value: 'pharmacien', label: 'pharmacien' },
  { value: 'agriculteur', label: 'agriculteur' },
  { value: 'traiteur', label: 'traiteur' },
  { value: 'caviste', label: 'caviste' },
  { value: 'epicerie fine', label: 'epicerie fine' },
  { value: 'fromager', label: 'fromager ' },
  { value: 'charcutier', label: 'charcutier' },
  { value: 'magasin Bio', label: 'magasin Bio' },
  { value: 'animalerie', label: 'animalerie' },
  { value: 'laiterie', label: 'laiterie' },
];
const Subscribe = ({
  emailValue,
  passwordValue,
  onFieldChange,
  onSubmitBtn,
  prenomValue,
  nomValue,
  confirmPasswordValue,
  onClickChangeCommercant,
  onClickChangeCondition,
  condition,
  isShop,
  onHandleJob,
  value,
  loading,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (condition === true) {
      if (passwordValue.length >= 4
        && passwordValue === confirmPasswordValue) {
        onSubmitBtn();
      }
      else {
        alert('Les mots de passe ne sont pas identique!')
      }
    }
    else {
      alert('Veuillez accepter les conditions!')
    }
  };
  const handleJob = (evt) => {
    const jobValue = evt.value;
    onHandleJob(jobValue);
  };

  const handleClick = (evt) => {
    evt.preventDefault();
    onClickChangeCommercant();
  };

  const handleClickCondition = (evt) => {
    evt.preventDefault();
    onClickChangeCondition();
  };

  const keyPressed = (evt) => {
    if (evt.key === 'Enter') {
      handleSubmit();
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
        <h2>Inscription</h2>
        <Form onSubmit={handleSubmit} onKeyPress={keyPressed}>
          <Form.Group unstackable widths={2}>
            <Field
              name="prenom"
              type="text"
              value={prenomValue}
              placeholder="Prénom"
              onInputChange={onFieldChange}
            />
            <Field
              name="nom"
              type="text"
              value={nomValue}
              placeholder="Nom"
              onInputChange={onFieldChange}
            />
          </Form.Group>
          <Field
            name="email"
            type="email"
            value={emailValue}
            placeholder="Adresse Email"
            onInputChange={onFieldChange}
          />
          <Form.Group unstackable widths={2}>
            <Field
              name="password"
              type="password"
              value={passwordValue}
              placeholder="Mot de passe"
              onInputChange={onFieldChange}
            />
            <Field
              name="confirmPassword"
              type="password"
              value={confirmPasswordValue}
              placeholder="Confirmer votre Mot de passe"
              onInputChange={onFieldChange}
            />
          </Form.Group>
          <Form.Checkbox
            type="checkbox"
            label="J'accèpte les Termes et les Conditions"
            onChange={handleClickCondition}
          />
          <Form.Checkbox
            label="Je suis commercant"
            onChange={handleClick}
          />
          {isShop && (
          <Select
            name="job"
            value={value}
            onChange={handleJob}
            options={options}
            placeholder="Sélectionner..."
          />
          )}
          <hr />
          <button type="submit" className="form-settings-submit">Inscription</button>
        </Form>
      </div>
    </div>
  );
};

Subscribe.propTypes = {
  value: PropTypes.string.isRequired,
  isShop: PropTypes.bool.isRequired,
  condition: PropTypes.bool.isRequired,
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  onSubmitBtn: PropTypes.func.isRequired,
  prenomValue: PropTypes.string.isRequired,
  nomValue: PropTypes.string.isRequired,
  confirmPasswordValue: PropTypes.string.isRequired,
  onClickChangeCommercant: PropTypes.func.isRequired,
  onClickChangeCondition: PropTypes.func.isRequired,
  onHandleJob: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Subscribe;
