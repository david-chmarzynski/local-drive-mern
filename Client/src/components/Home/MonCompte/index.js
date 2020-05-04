import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Header, Input, Icon, Button, Breadcrumb } from 'semantic-ui-react';
import SuccessModalMonCompte from 'src/containers/SuccessModalMonCompte';
import './moncompte.scss';

const MonCompte = ({
  user,
  emailValue,
  lastnameValue,
  firstnameValue,
  numberValue,
  streetValue,
  zipValue,
  cityValue,
  phoneValue,
  HandleChangeInfoEmail,
  HandleChangeInfoLastname,
  HandleChangeInfoFirstname,
  HandleChangeInfoNumber,
  HandleChangeInfoStreet,
  HandleChangeInfoZip,
  HandleChangeInfoCity,
  HandleChangeInfoPhone,
  HandleSubmit,
  loading,
}) => {
  const onHandleSubmit = (evt) => {
    evt.preventDefault();
    HandleSubmit();
  };

  const onHandleChangeInfoEmail = (evt) => {
    const idUser = user.map((userId) => (
      userId.id
    ));
    const email = evt.target.value;
    HandleChangeInfoEmail(email, idUser);
  };

  const onHandleChangeInfoLastname = (evt) => {
    const lastname = evt.target.value;
    HandleChangeInfoLastname(lastname);
  };

  const onHandleChangeInfoFirstname = (evt) => {
    const firstname = evt.target.value;
    HandleChangeInfoFirstname(firstname);
  };

  const onHandleChangeInfoNumber = (evt) => {
    const number = evt.target.value;
    HandleChangeInfoNumber(number);
  };

  const onHandleChangeInfoStreet = (evt) => {
    const street = evt.target.value;
    HandleChangeInfoStreet(street);
  };

  const onHandleChangeInfoZip = (evt) => {
    const zip = evt.target.value;
    HandleChangeInfoZip(zip);
  };

  const onHandleChangeInfoCity = (evt) => {
    const city = evt.target.value;
    HandleChangeInfoCity(city);
  };

  const onHandleChangeInfoPhone = (evt) => {
    const phone = evt.target.value;
    HandleChangeInfoPhone(phone);
  };
  return (
    <div id="account">
      <div id="breadcrumb">
        <Breadcrumb>
          <NavLink to="/">
            <Breadcrumb.Section link>Accueil</Breadcrumb.Section>
          </NavLink>
          <Breadcrumb.Divider>/</Breadcrumb.Divider>
          <Breadcrumb.Section active>MonCompte</Breadcrumb.Section>
        </Breadcrumb>
      </div>
      <Header><h1>Mes Informations Personnelles</h1></Header>
      <Header><h2>Mes Identifiants</h2></Header>
      {user.map((info) => (
        <React.Fragment key={info.id}>
          <form onSubmit={onHandleSubmit}>
            <div id="identifiants">
              <span>Mon Adresse Email :</span>
              <Input
                iconPosition="right"
                placeholder={info.email}
                value={emailValue}
                name="email"
                onChange={onHandleChangeInfoEmail}
              >
                <Icon name="at" />
                <input />
              </Input>
            </div>
            <Header><h2>Mes Coordonnées</h2></Header>
            <div id="identifiants">
              <span>Nom :</span>
              <Input
                iconPosition="right"
                placeholder={info.lastname}
                value={lastnameValue}
                name="nom"
                onChange={onHandleChangeInfoLastname}
              >
                <Icon name="user" />
                <input />
              </Input>
            </div>
            <div id="identifiants">
              <span>Prénom :</span>
              <Input
                iconPosition="right"
                placeholder={info.firstname}
                value={firstnameValue}
                name="prenom"
                onChange={onHandleChangeInfoFirstname}
              >
                <Icon name="user" />
                <input />
              </Input>
            </div>
            <div id="identifiants">
              <span>Numéro de Rue :</span>
              <Input
                iconPosition="right"
                placeholder={info.number}
                onChange={onHandleChangeInfoNumber}
                value={numberValue}
                name="number"
              >
                <Icon name="point" />
                <input />
              </Input>
            </div>
            <div id="identifiants">
              <span>Adresse :</span>
              <Input
                iconPosition="right"
                placeholder={info.street}
                onChange={onHandleChangeInfoStreet}
                name="rue"
                value={streetValue}
              >
                <Icon name="point" />
                <input />
              </Input>
            </div>
            <div id="identifiants">
              <span>Code Postal :</span>
              <Input
                iconPosition="right"
                placeholder={info.zip}
                onChange={onHandleChangeInfoZip}
                value={zipValue}
                name="zip"
              >
                <Icon name="point" />
                <input />
              </Input>
            </div>
            <div id="identifiants">
              <span>Ville :</span>
              <Input
                iconPosition="right"
                placeholder={info.city}
                onChange={onHandleChangeInfoCity}
                value={cityValue}
                name="ville"
              >
                <Icon name="point" />
                <input />
              </Input>
            </div>
            <div id="identifiants">
              <span>Telephone</span>
              <Input
                iconPosition="right"
                placeholder={info.phone}
                onChange={onHandleChangeInfoPhone}
                value={phoneValue}
                name="phone"
              >
                <Icon name="phone" />
                <input />
              </Input>
            </div>
            <div id="button">
              {loading === false && (
                <Button type="submit" className="form-user-change-submit">Valider</Button>
              )}
              {loading === true && (
                <Button loading primary />
              )}
            </div>
          </form>
        </React.Fragment>
      ))}
      <SuccessModalMonCompte />
    </div>
  );
};

MonCompte.propTypes = {
  emailValue: PropTypes.string.isRequired,
  firstnameValue: PropTypes.string.isRequired,
  lastnameValue: PropTypes.string.isRequired,
  numberValue: PropTypes.string.isRequired,
  streetValue: PropTypes.string.isRequired,
  zipValue: PropTypes.string.isRequired,
  cityValue: PropTypes.string.isRequired,
  phoneValue: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  HandleChangeInfoEmail: PropTypes.func.isRequired,
  HandleChangeInfoLastname: PropTypes.func.isRequired,
  HandleChangeInfoFirstname: PropTypes.func.isRequired,
  HandleChangeInfoStreet: PropTypes.func.isRequired,
  HandleChangeInfoZip: PropTypes.func.isRequired,
  HandleChangeInfoCity: PropTypes.func.isRequired,
  HandleChangeInfoNumber: PropTypes.func.isRequired,
  HandleChangeInfoPhone: PropTypes.func.isRequired,
  HandleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default MonCompte;
