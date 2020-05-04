import React from 'react';
import Select from 'react-select';
import SuccessModalAddProduct from 'src/containers/SuccessModalAddProduct';
import { Button, Breadcrumb, Form, Input, TextArea } from 'semantic-ui-react';
import ImageUploader from 'react-images-upload';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './add.scss';


const Add = ({
  userCommercant,
  categories,
  value,
  handleSelectCategory,
  handleChangeNameValue,
  handleChangePriceValue,
  handleChangeStockValue,
  handleChangeUnitValue,
  handleChangeDescriptionValue,
  handleSubmitProduct,
  loading,
}) => {
  // Tableau/Liste des catégories disponibles
  const shop = [];
  categories.map((category) => (
    shop.push({ key: `${category.id}`, value: `${category.name}`, label: `${category.name}` })
  ));

  // Tableau des unités de ventes disponibles
  const units = [
    { key: 1, value: '/KG', label: '/KG' },
    { key: 2, value: '/L', label: '/L' },
    { key: 3, value: '/unité', label: '/unité' },
    { key: 4, value: '/Lot de 2', label: '/Lot de 2' },
    { key: 5, value: '/Lot de 4', label: '/Lot de 4' },
    { key: 6, value: '/Lot de 6', label: '/Lot de 6' },
  ];

  // Ajout de categoryId dans le store
  const handleClickCat = (evt) => {
    const id = evt.key;
    handleSelectCategory(id);
  };
  // Ajout de Name dans le store
  const handleChangeName = (evt) => {
    const name = evt.target.value;
    handleChangeNameValue(name);
  };
  // Ajout du Prix dans le store
  const handleChangePrice = (evt) => {
    const price = evt.target.value;
    handleChangePriceValue(price);
  };
  // Change l'unité de vente dans le store
  const handleClickUnit = (evt) => {
    const unit = evt.value;
    handleChangeUnitValue(unit);
  };
  // Ajout du Stock dans le store
  const handleChangeStock = (evt) => {
    const stock = evt.target.value;
    handleChangeStockValue(stock);
  };
  // Ajout de la description dans le store
  const handleChangeDescription = (evt) => {
    const description = evt.target.value;
    const idshop = userCommercant[0].id;
    const shopId = idshop.toString();
    handleChangeDescriptionValue(description, shopId);
  };
  // Soumission du produit
  const handleSubmitAddProduct = () => {
    handleSubmitProduct();
  };

  return (
    <div id="add">
      <div id="add-header">
        <div id="breadcrumb">
          <Breadcrumb>
            <NavLink to="/">
              <Breadcrumb.Section link>Accueil</Breadcrumb.Section>
            </NavLink>
            <Breadcrumb.Divider>/</Breadcrumb.Divider>
            <NavLink to="/Admin">
              <Breadcrumb.Section link>Admin</Breadcrumb.Section>
            </NavLink>
            <Breadcrumb.Divider>/</Breadcrumb.Divider>
            <Breadcrumb.Section active>Ajouter un produit</Breadcrumb.Section>
          </Breadcrumb>
        </div>
        <h2 id="add-title">Ajouter un produit :</h2>
      </div>
      <div>
        <ImageUploader
          withIcon
          buttonText="Choisir une image"
          imgExtension={['.jpg', '.gif', '.png', '.gif']}
          maxFileSize={5242880}
          label="Taille Max Fichier : 5 mb, jpg, png, gif"
          withPreview
          simpleImage
        />
      </div>
      <Form>
        <Form.Group widths="equal">

          <Form.Field
            control={Input}
            label="Nom de produit :"
            placeholder="Nom de produit :"
            onChange={handleChangeName}
          />
          <Form.Field
            control={Input}
            label="Prix"
            placeholder="Prix"
            onChange={handleChangePrice}
          />
          <Form.Field
            control={Select}
            onChange={handleClickCat}
            options={shop}
            value={value}
            placeholder="Sélectionner..."
            label="Catégorie"
            search
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            label="Stock/Pièces"
            placeholder="Stock/Pièces"
            onChange={handleChangeStock}
          />
          <Form.Field
            control={Select}
            onChange={handleClickUnit}
            options={units}
            value={value}
            placeholder="Sélectionner..."
            label="Unité de vente:"
            search
          />
        </Form.Group>
        <Form.Field
          control={TextArea}
          label="Description"
          placeholder="Description"
          onChange={handleChangeDescription}
        />
        {loading === false && (
          <Button
            control={Button}
            onClick={handleSubmitAddProduct}
            content="Ajouter"
          />
        )}
        {loading === true && (
          <Button loading>Loading</Button>
        )}
      </Form>
      <SuccessModalAddProduct />
    </div>
  );
};
Add.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  value: PropTypes.string.isRequired,
  handleSelectCategory: PropTypes.func.isRequired,
  handleChangeNameValue: PropTypes.func.isRequired,
  handleChangePriceValue: PropTypes.func.isRequired,
  handleChangeStockValue: PropTypes.func.isRequired,
  handleChangeUnitValue: PropTypes.func.isRequired,
  handleChangeDescriptionValue: PropTypes.func.isRequired,
  handleSubmitProduct: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  userCommercant: PropTypes.array.isRequired,
};

export default Add;
