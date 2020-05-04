// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// == Import : local
import './field.scss';

// == Composant
class Field extends React.Component {
  /*
  // Il est possible de déclarer les propTypes et defaultProps
  // directement dans la classe avec static

  static propTypes = {
    value: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: '',
    type: 'text',
  };
  */

  handleChange = (evt) => {
    // Recup des props utiles
    const { onInputChange, name } = this.props;
    // Récup les infos du champ (name, value)
    const newValue = evt.target.value;
    // Éxécution de la fonction venant du dessus
    onInputChange(newValue, name);
  };

  render() {
    // Déstructuration de l'objet des props
    const {
      value,
      type,
      name,
      placeholder,
    } = this.props;

    const inputId = `field-${name}`;

    const cssClassNames = classNames(
      'field',
      {
        'field--has-content': value.length > 0,
      },
    );

    return (
      <div className={cssClassNames}>
        <input
          // React - state
          value={value}
          onChange={this.handleChange}
          // infos de base
          id={inputId}
          type={type}
          className="field-input"
          placeholder={placeholder}
          name={name}
        />

        <label
          htmlFor={inputId}
          className="field-label"
        >
          {placeholder}
        </label>
      </div>
    );
  }
}


Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  value: '',
  type: 'text',
};

// == Export
export default Field;
