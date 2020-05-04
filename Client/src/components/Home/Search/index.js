import React from 'react';
import PropTypes from 'prop-types';
import { Form, Dimmer, Loader, Icon } from 'semantic-ui-react';
import './search.scss';
import { NavLink } from 'react-router-dom';

import Field from 'src/components/Home/Field';

const SearchVille = ({
  villeValue,
  onFieldChange,
  onSubmitVille,
  loading,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (villeValue.length > 2) {
      onSubmitVille();
    } else {
      alert('Veuillez saisir une ville');
    }
  };

  return (
    <div className="input">
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
      <Form method="post" className="search-bar" onSubmit={handleSubmit}>
        <NavLink to="/Result">
          <Field
            name="ville"
            id="inputVille"
            type="text"
            value={villeValue}
            onInputChange={onFieldChange}
            placeholder="Trouver votre ville"
          />
        </NavLink>
        <button
          type="submit"
          className="form-search-submit"
        >
          <Icon name="search" />
        </button>
      </Form>
    </div>
  );
};


SearchVille.propTypes = {
  villeValue: PropTypes.string.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  onSubmitVille: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SearchVille;
