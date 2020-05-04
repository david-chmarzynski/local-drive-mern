import React from 'react';
import Select from 'react-select';
import { Grid, Image, Button, Breadcrumb, Form, Input, TextArea } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'src/components/Home/Admin/Product/product.scss';
import SuccessModalModifyProduct from 'src/containers/SuccessModalModifyProduct';

const Product = ({
  loneProduct,
  userCommercant,
  categories,
  handleSelectCategory,
  value,
  handleChangeNameValue,
  handleChangePriceValue,
  handleChangeUnitValue,
  handleChangeStockValue,
  handleChangeDescriptionValue,
  handleSubmitModifiedProduct,
  name,
  price,
  descriptionProduit,
  unit,
  stock,
  loading,
}) => {
  const shop = [];
  categories.map((category) => (
    shop.push({ key: `${category.id}`, value: `${category.name}`, label: `${category.name}` })
  ));
  const dynamicWidth = window.innerWidth;
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
  // Ajout de l'id commercant dans store
  const handleChangeDescription = (evt) => {
    const description = evt.target.value;
    const idshop = userCommercant[0].id;
    const shopId = idshop.toString();
    handleChangeDescriptionValue(description, shopId);
  };
  // Soumission du produit
  const handleSubmitModifyProduct = () => {
    const shopId = loneProduct.id;
    handleSubmitModifiedProduct(shopId);
  };
  return (
    <div id="product">
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
          <NavLink to="/Admin/Modify">
            <Breadcrumb.Section link>Modifier un produit</Breadcrumb.Section>
          </NavLink>
          <Breadcrumb.Divider>/</Breadcrumb.Divider>
          <Breadcrumb.Section active>Modification</Breadcrumb.Section>
        </Breadcrumb>
      </div>
      <div id="product-grid">
        <h2 id="product-grid-title">Modification de {loneProduct.name}:</h2>
        {dynamicWidth >= 956 && (
        <Grid>
          <Grid.Column width={6}>
            {loneProduct.image !== null && (
              <Image src={loneProduct.image} />
            )}
            {loneProduct.image === null && (
              <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
            )}
          </Grid.Column>
          <Grid.Column width={9}>
            <div id="product-area">
              <Form>
                <Form.Group widths="equal">
                  <Form.Field
                    control={Input}
                    label="Nom de produit :"
                    placeholder={loneProduct.name}
                    onChange={handleChangeName}
                    value={name}
                  />
                  <Form.Field
                    control={Input}
                    label="Prix"
                    placeholder={loneProduct.price}
                    onChange={handleChangePrice}
                    value={price}
                  />
                  <Form.Field
                    control={Select}
                    onChange={handleClickCat}
                    options={shop}
                    defaultValue={{ value: loneProduct.category.name, label: loneProduct.category.name }}
                    value={value}
                    placeholder="Sélectionner..."
                    label={{ children: 'Catégorie', htmlFor: 'form-select-control-gender' }}
                    search
                    searchInput={{ label: 'form-select-control-gender' }}
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Field
                    control={Input}
                    label="Stock/Pièces"
                    placeholder={loneProduct.stock}
                    onChange={handleChangeStock}
                    value={stock}
                  />
                  <Form.Field
                    control={Select}
                    onChange={handleClickUnit}
                    options={units}
                    defaultValue={{ value: loneProduct.unit, label: loneProduct.unit }}
                    value={value}
                    placeholder="Sélectionner..."
                    label={{ children: 'Unité de vente :', htmlFor: 'form-select-control-gender' }}
                    search
                    searchInput={{ label: 'form-select-control-gender' }}
                  />
                </Form.Group>
                <Form.Field
                  control={TextArea}
                  label="Description"
                  placeholder={loneProduct.description}
                  onChange={handleChangeDescription}
                  value={descriptionProduit}
                />
                {loading === true && (
                  <Button loading>Loading</Button>
                )}
                {loading === false && (
                  <Button
                    control={Button}
                    onClick={handleSubmitModifyProduct}
                    content="Valider les modifications"
                  />
                )}
              </Form>
            </div>
          </Grid.Column>
        </Grid>
        )}
        {dynamicWidth <= 955 && (
          <Grid>
            <Grid.Column>
              {loneProduct.image !== null && (
                <Image src={loneProduct.image} />
              )}
              {loneProduct.image === null && (
                <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
              )}
              <div id="product-area">
                <Form>
                  <Form.Group widths="equal">
                    <Form.Field
                      control={Input}
                      label="Nom de produit :"
                      placeholder={loneProduct.name}
                      onChange={handleChangeName}
                      // content={loneProduct.name}
                      value={name}
                    />
                    <Form.Field
                      control={Input}
                      label="Prix"
                      placeholder={loneProduct.price}
                      onChange={handleChangePrice}
                      value={price}
                    />
                    <Form.Field
                      control={Select}
                      onChange={handleClickCat}
                      options={shop}
                      defaultValue={{ value: loneProduct.category.name, label: loneProduct.category.name }}
                      value={value}
                      placeholder="Sélectionner..."
                      label={{ children: 'Catégorie', htmlFor: 'form-select-control-gender' }}
                      // placeholder='Type de produit :'
                      search
                      searchInput={{ label: 'form-select-control-gender' }}
                    />
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.Field
                      control={Input}
                      label="Stock/Pièces"
                      placeholder={loneProduct.stock}
                      onChange={handleChangeStock}
                      value={stock}
                    />
                    <Form.Field
                      control={Select}
                      onChange={handleClickUnit}
                      options={units}
                      defaultValue={{ value: loneProduct.unit, label: loneProduct.unit }}
                      value={unit}
                      placeholder="Sélectionner..."
                      label={{ children: 'Unité de vente :', htmlFor: 'form-select-control-gender' }}
                      search
                      searchInput={{ label: 'form-select-control-gender' }}
                    />
                  </Form.Group>
                  <Form.Field
                    control={TextArea}
                    label="Description"
                    placeholder={loneProduct.description}
                    onChange={handleChangeDescription}
                    value={descriptionProduit}
                  />
                  {loading === true && (
                    <Button loading>Loading</Button>
                  )}
                  {loading === false && (
                    <Button
                      control={Button}
                      onClick={handleSubmitModifyProduct}
                      content="Valider les modifications"
                    />
                  )}
                </Form>
              </div>
            </Grid.Column>
          </Grid>
        )}
      </div>
      <SuccessModalModifyProduct />
    </div>
  );
};

Product.propTypes = {
  productsCommercant: PropTypes.shape({
    products: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      sale: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      unit: PropTypes.string.isRequired,
      stock: PropTypes.string.isRequired,
      createdat: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  loneProduct: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    sale: PropTypes.string,
    description: PropTypes.string,
    unit: PropTypes.string,
    stock: PropTypes.string,
    createdat: PropTypes.string,
    category: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  handleChangeNameValue: PropTypes.func.isRequired,
  handleChangePriceValue: PropTypes.func.isRequired,
  handleChangeUnitValue: PropTypes.func.isRequired,
  handleChangeStockValue: PropTypes.func.isRequired,
  handleChangeDescriptionValue: PropTypes.func.isRequired,
  handleSubmitModifiedProduct: PropTypes.func.isRequired,
  handleSelectCategory: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  sale: PropTypes.string.isRequired,
  descriptionProduit: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  stock: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Product;
