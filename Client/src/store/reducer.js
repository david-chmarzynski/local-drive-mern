import actions from "redux-form/lib/actions";

const initialState = {
  isShop: false,
  job: '',
  password: '', // //
  confirmPassword: '', //
  nom: '', //
  prenom: '', //
  condition: false,
  recipes: [],
  shops: [],
  ville: '', //
  token: '',
  userShopChoixId: '',
  userShopChoixName: '',
  userShopChoix: [],
  // MODIF UTILISATEUR
  user: '',
  idUser: '',
  email: '',
  street: '',
  zip: '',
  number: '',
  city: '',
  firstname: '',
  lastname: '',
  phone: '',

// PANIER
  panier: [],
  NewPanier: [],
  total: [],
  logged: false, //
  modalPanier: false,
  openModal: false, //
  loading: false, //
  openDeletingModal: false,
  openPromotionModal: false,
  openSubMenu: false,
  userCommercant: '',
  openBasketMenu: false,
  // ADMIN ADD PRODUCT :
  shopId: '',
  categoryId: '',
  name: '',
  image: '',
  price: '',
  sale: '',
  description: '',
  unit: '',
  stock: '',
  categories: [],
  products: [],
  promotions: [],
  toDelete: '',
  loneProduct: '',
  toSale: '',
  // SUCCESS MODAL (changement par réponse positive du MiddleWare)
  successModalBool: false,
};
export const CHANGE_COMMERCANT = 'CHANGE_COMMERCANT';
export const HANDLE_JOB_VALUE = 'HANDLE_JOB_VALUE';
export const LOG_COMMERCANT = 'LOG_COMMERCANT';
export const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE';
export const CHANGE_CONDITION = 'CHANGE_CONDITION';
export const CHANGE_OPEN_MODAL = 'CHANGE_OPEN_MODAL';
export const CHANGE_CLOSE_MODAL = 'CHANGE_CLOSE_MODAL';
export const LOGOUT = 'LOGOUT';
export const CHANGE_OPEN_DELETING_MODAL = 'CHANGE_OPEN_DELETING_MODAL';
export const CHANGE_CLOSE_DELETING_MODAL = 'CHANGE_CLOSE_DELETING_MODAL';
export const CHANGE_OPEN_PROMOTION_MODAL = 'CHANGE_OPEN_PROMOTION_MODAL';
export const CHANGE_CLOSE_PROMOTION_MODAL = 'CHANGE_CLOSE_PROMOTION_MODAL';
export const CHANGE_OPEN_SUB_MENU = 'CHANGE_OPEN_SUB_MENU';
export const CHANGE_OPEN_BASKET_MENU = 'CHANGE_OPEN_BASKET_MENU';
export const HANDLE_VILLE = 'HANDLE_VILLE';
export const SHOP_CHOIX_USER = 'SHOP_CHOIX_USER';
export const CHARGE_USER_SHOP_PRODUCTS = 'CHARGE_USER_SHOP_PRODUCTS';

// == PANIER
export const PANIER = 'PANIER';
export const DELECT_PRODUCT_PANIER = 'DELECT_PRODUCT_PANIER';
export const QUANTITE_VALEUR = 'QUANTITE_VALEUR';
export const TOTAL_PANIER = 'TOTAL_PANIER';
export const CHANGE_OPEN_MODAL_PANIER = 'CHANGE_OPEN_MODAL_PANIER';
// export const CLOSE_PANIER = 'CLOSE_PANIER';
// == Axios
export const LOGGED = 'LOGGED';
export const LOGIN = 'LOGIN';
export const SUBSCRIBE = 'SUBSCRIBE';
export const FETCH_DATA = 'FETCH_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const STOP_LOADING = 'STOP_LOADING';
export const START_LOADING = 'START_LOADING';
const LOG_USER = 'LOG_USER';
export const ADMIN_ADD_PRODUCT = 'ADMIN_ADD_PRODUCT';
export const CHARGE_DATA_CATEGORIES = 'CHARGE_DATA_CATEGORIES';
export const CHARGE_CATEGORIES = 'CHARGE_CATEGORIES';
export const CHARGE_DATA_PRODUCTS = 'CHARGE_DATA_PRODUCTS';
export const CHARGE_PRODUCTS = 'CHARGE_PRODUCTS';
export const CHARGE_DATA_PROMOTIONS = 'CHARGE_DATA_PROMOTIONS';
export const CHARGE_PROMOTIONS = 'CHARGE_PROMOTIONS';
export const TOKEN = 'TOKEN';
export const SHOP_CHOIX_RESULT = 'SHOP_CHOIX_RESULT';
export const CHARGE_SHOP_PRODUCTS = 'CHARGE_SHOP_PRODUCTS';

// == ADD PRODUCT
export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const CHANGE_NAME_VALUE = 'CHANGE_NAME_VALUE';
export const CHANGE_PRICE_VALUE = 'CHANGE_PRICE_VALUE';
export const CHANGE_STOCK_VALUE = 'CHANGE_STOCK_VALUE';
export const CHANGE_UNIT_VALUE = 'CHANGE_UNIT_VALUE';
export const CHANGE_DESCRIPTION_VALUE = 'CHANGE_DESCRIPTION_VALUE';
export const SUBMIT_PRODUCT = 'SUBMIT_PRODUCT';

// == DELETE PROMOTION
export const DELETE_PROMOTION = 'DELETE_PROMOTION';
export const CHARGE_DELETED_PROMOTION = 'CHARGE_DELETED_PROMOTION';
// ======================

// == Modif User
export const CHANGE_INFO_EMAIL = 'CHANGE_INFO_EMAIL';
export const CHANGE_INFO_FIRSTNAME = 'CHANGE_INFO_FIRSTNAME';
export const CHANGE_INFO_LASTNAME = 'CHANGE_INFO_LASTNAME';
export const CHANGE_INFO_NUMBER = 'CHANGE_INFO_NUMBER';
export const CHANGE_INFO_STREET = 'CHANGE_INFO_STREET';
export const CHANGE_INFO_ZIP = 'CHANGE_INFO_ZIP';
export const CHANGE_INFO_CITY = 'CHANGE_INFO_CITY';
export const CHANGE_INFO_PHONE = 'CHANGE_INFO_PHONE';
export const SUBMIT_MODIF_USER = 'SUBMIT_MODIF_USER';

// == Modif Produit
export const INSERT_PRODUCT = 'INSERT_PRODUCT';
export const MODIFIED_PRODUCT = 'MODIFIED_PRODUCT';
export const CHARGE_MODIFIED_PRODUCT = 'CHARGE_MODIFIED_PRODUCT';

// == ADD PROMOTION
export const INSERT_TO_SALE = 'INSERT_TO_SALE';
export const INSERT_PROMOTION = 'INSERT_PROMOTION';
export const OPEN_CLOSE_PROMOTION_MODALE = 'OPEN_CLOSE_PROMOTION_MODALE';

// == SUCCESS MODAL
export const OPEN_SUCCESS_MODAL = 'OPEN_SUCCESS_MODAL';
export const CLOSE_SUCCESS_MODAL = 'CLOSE_SUCCESS_MODAL';
// == reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FIELD_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case HANDLE_JOB_VALUE:
      return {
        ...state,
        job: action.value,
      };
    case CHANGE_COMMERCANT:
      return {
        ...state,
        isShop: !state.isShop,
      };
    case CHANGE_CONDITION:
      return {
        ...state,
        condition: !state.condition,
      };
    case CHANGE_OPEN_MODAL:
      return {
        ...state,
        openModal: true,
        openSubMenu: false,
      };
    case CHANGE_CLOSE_MODAL:
      return {
        ...state,
        openModal: false,
        openDeletingModal: false,
      };
    case LOGOUT:
      return {
        ...state,
        isShop: false,
        logged: false,
        openModal: false,
      };
    case LOG_USER:
      return {
        ...state,
        user: action.name,
        logged: true,
      };
    case TOKEN:
      return {
        ...state,
        token: action.value,
      };
    case LOG_COMMERCANT:
      return {
        ...state,
        isShop: true,
        userCommercant: action.name,
        logged: true,
        // shopId: action.id,
      };
    case HANDLE_VILLE:
      return {
        ...state,
        ville: action.ville,
      };
    case RECEIVE_DATA:
      return {
        ...state,
        shops: action.shops,
        ville: '',
        categories: action.categories,
      };

    case STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    case START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CHANGE_OPEN_DELETING_MODAL:
      return {
        ...state,
        openDeletingModal: true,
        toDelete: action.id,
      };
    case CHANGE_CLOSE_DELETING_MODAL:
      return {
        ...state,
        openDeletingModal: false,
      };
    case CHANGE_OPEN_PROMOTION_MODAL:
      return {
        ...state,
        openPromotionModal: true,
      };
    case CHANGE_CLOSE_PROMOTION_MODAL:
      return {
        ...state,
        openPromotionModal: false,
      };
    case CHANGE_OPEN_SUB_MENU:
      return {
        ...state,
        openSubMenu: !state.openSubMenu,
        openBasketMenu: false,
      };
    case CHANGE_OPEN_BASKET_MENU:
      return {
        ...state,
        openBasketMenu: !state.openBasketMenu,
        openSubMenu: false,
      };
    case ADMIN_ADD_PRODUCT:
      return {
        ...state,
      };
      // CHARGE DATAS
    case CHARGE_DATA_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    case CHARGE_DATA_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    case CHARGE_SHOP_PRODUCTS:
      return {
        ...state,
        shop: action.products,
      };
    case CHARGE_USER_SHOP_PRODUCTS:
      return {
        ...state,
        userShopChoix: action.products,
      };
    case CHARGE_DATA_PROMOTIONS:
      return {
        ...state,
        promotions: action.promotions,
      };
    case SELECT_CATEGORY:
      return {
        ...state,
        categoryId: action.id,
      };
    case CHANGE_NAME_VALUE:
      return {
        ...state,
        name: action.name,
      };
    case CHANGE_PRICE_VALUE:
      return {
        ...state,
        price: action.price,
      };
    case CHANGE_STOCK_VALUE:
      return {
        ...state,
        stock: action.stock,
      };
    case CHANGE_UNIT_VALUE:
      return {
        ...state,
        unit: action.unit,
      };
    case CHANGE_DESCRIPTION_VALUE:
      return {
        ...state,
        description: action.description,
        shopId: action.shopId,
      };
    case CHARGE_DELETED_PROMOTION:
      return {
        ...state,
        promotions: action.promotions,
        toDelete: '',
      };
    case CHARGE_MODIFIED_PRODUCT:
      return {
        ...state,
        // loneProduct: action.loneProduct,
        name: action.loneProduct.name,
        image: action.loneProduct.image,
        price: action.loneProduct.price,
        sale: action.loneProduct.sale,
        description: action.loneProduct.description,
        unit: action.loneProduct.unit,
        stock: action.loneProduct.stock,
      };
    case SHOP_CHOIX_USER:
      return {
        ...state,
        userShopChoixId: action.shopChoixId,
        userShopChoixName: action.shopChoixName,
      };
    // PANIER
    case PANIER:
      return {
        ...state,
        ...{
          panier: [...state.panier, action.NewProduct],
          NewPanier: [...state.panier, action.NewProduct]},
      };
    case DELECT_PRODUCT_PANIER:
      return {
        ...state,
        panier: action.newPanierStore,
        NewPanier: action.newPanierStore,
      };
    case QUANTITE_VALEUR:
      return {
        ...state,
        NewPanier: [...state.NewPanier, action.newPanierStoreMaj],
        panier: [...state.NewPanier],
      };
    case TOTAL_PANIER:
      return {
        ...state,
        total: action.TotalPanier,
        //
      };
    case CHANGE_OPEN_MODAL_PANIER:
      return {
        ...state,
        modalPanier: true,
      };
    // case CLOSE_PANIER:
    //   return {
    //     ...state,
    //     modalPanier: false,
    //   };
    // CHANGE USER
    case CHANGE_INFO_EMAIL:
      return {
        ...state,
        email: action.email,
        idUser: action.idUser,
      };
    case CHANGE_INFO_FIRSTNAME:
      return {
        ...state,
        firstname: action.firstname,
      };
    case CHANGE_INFO_LASTNAME:
      return {
        ...state,
        lastname: action.lastname,
      };
    case CHANGE_INFO_NUMBER:
      return {
        ...state,
        number: action.number,
      };
    case CHANGE_INFO_STREET:
      return {
        ...state,
        street: action.street,
      };
    case CHANGE_INFO_ZIP:
      return {
        ...state,
        zip: action.zip,
      };
    case CHANGE_INFO_CITY:
      return {
        ...state,
        city: action.city,
      };
    case CHANGE_INFO_PHONE:
      return {
        ...state,
        phone: action.phone,
      };
    case INSERT_PRODUCT:
      return {
        ...state,
        loneProduct: action.product,
      };
    case INSERT_PROMOTION:
      return {
        ...state,
        loneProduct: action.loneProduct,
        openPromotionModal: false,
      };
    case INSERT_TO_SALE:
      return {
        ...state,
        toSale: action.toSale,
      };
    case OPEN_CLOSE_PROMOTION_MODALE:
      return {
        ...state,
        openPromotionModal: !state.openPromotionModal,
      };
    case OPEN_SUCCESS_MODAL:
      return {
        ...state,
        successModalBool: true,
      };
    case CLOSE_SUCCESS_MODAL:
      return {
        ...state,
        successModalBool: false,
      };
    default:
      return state;
  }
};

export const changeFieldValue = (value, name) => ({
  type: CHANGE_FIELD_VALUE,
  name,
  value,
});

export const handleJobValue = (value) => ({
  type: HANDLE_JOB_VALUE,
  value,
});

export const changeCommercant = () => ({
  type: CHANGE_COMMERCANT,
});

export const changeCondition = () => ({
  type: CHANGE_CONDITION,
});

export const changeOpenModal = (clickPanier) => ({
  type: CHANGE_OPEN_MODAL,
  clickPanier,
});

export const changeCloseModal = () => ({
  type: CHANGE_CLOSE_MODAL,
});

export const logOut = () => ({
  type: LOGOUT,
});

export const handleVille = () => ({
  type: HANDLE_VILLE,
});

export const changeDeletingOpenModal = (id) => ({
  type: CHANGE_OPEN_DELETING_MODAL,
  id,
});

export const changeDeletingCloseModal = () => ({
  type: CHANGE_CLOSE_DELETING_MODAL,
});

export const changePromotionOpenModal = () => ({
  type: CHANGE_OPEN_PROMOTION_MODAL,
});

export const changePromotionCloseModal = () => ({
  type: CHANGE_CLOSE_PROMOTION_MODAL,
});

export const shopChoixUser = (shopChoixId, shopChoixName) => ({
  type: SHOP_CHOIX_USER,
  shopChoixId,
  shopChoixName,
});

// === Axios
export const shopChoixResult = () => ({
  type: SHOP_CHOIX_RESULT,
});
export const token = (value) => ({
  type: TOKEN,
  value,
});

export const receiveData = (shops) => ({
  type: RECEIVE_DATA,
  shops,
});

export const logged = () => ({
  type: LOGGED,
});

export const login = () => ({
  type: LOGIN,
});
export const subscribe = () => ({
  type: SUBSCRIBE,
});

export const stopLoading = () => ({
  type: STOP_LOADING,
});

export const startLoading = () => ({
  type: START_LOADING,
});

export const fetchData = () => ({
  type: FETCH_DATA,
});

export const logUser = (name) => ({
  type: LOG_USER,
  name,
});
export const logCommercant = (name, id) => ({
  type: LOG_COMMERCANT,
  name,
  id,
});

export const changeOpenSubMenu = () => ({
  type: CHANGE_OPEN_SUB_MENU,
});

export const changeOpenBasketMenu = () => ({
  type: CHANGE_OPEN_BASKET_MENU,
});

/////// CHARGE DATA \\\\\\\\
export const adminAddProduct = () => ({
  type: ADMIN_ADD_PRODUCT,
});

export const chargeUserShopProducts = (products) => ({
  type: CHARGE_USER_SHOP_PRODUCTS,
  products,
});

export const chargeDataCategories = (categories) => ({
  type: CHARGE_DATA_CATEGORIES,
  categories,
});

export const chargeCategories = () => ({
  type: CHARGE_CATEGORIES,
});

export const chargeProducts = () => ({
  type: CHARGE_PRODUCTS,
});

export const chargeDataProducts = (products) => ({
  type: CHARGE_DATA_PRODUCTS,
  products,
});

export const chargePromotions = () => ({
  type: CHARGE_PROMOTIONS,
});

export const chargeDataPromotions = (promotions) => ({
  type: CHARGE_DATA_PROMOTIONS,
  promotions,
});

export const chargeShopProducts = (products) => ({
  type: CHARGE_SHOP_PRODUCTS,
  products,
});

//////// PANIER \\\\\\\\

export const panier = (NewProduct) => ({
  type: PANIER,
  NewProduct,
});
export const delectProductPanier = (newPanierStore) => ({
  type: DELECT_PRODUCT_PANIER,
  newPanierStore,
});

export const QuantiteValeur = (newPanierStoreMaj) => ({
  type: QUANTITE_VALEUR,
  newPanierStoreMaj,
});

export const totalPanier = (TotalPanier) => ({
  type: TOTAL_PANIER,
  TotalPanier,
});

export const changeOpenModalPanier = () => ({
  type: CHANGE_OPEN_MODAL_PANIER,
});

// export const closePanier = () => ({
//   type: CLOSE_PANIER,
// });
/////// ADD PRODUCT \\\\\\\\

export const selectCategoryId = (id) => ({
  type: SELECT_CATEGORY,
  id,
});

export const changeNameValue = (name) => ({
  type: CHANGE_NAME_VALUE,
  name,
});

export const changePriceValue = (price) => ({
  type: CHANGE_PRICE_VALUE,
  price,
});

export const changeStockValue = (stock) => ({
  type: CHANGE_STOCK_VALUE,
  stock,
});

export const changeUnitValue = (unit) => ({
  type: CHANGE_UNIT_VALUE,
  unit,
});

export const changeDescriptionValue = (description, shopId) => ({
  type: CHANGE_DESCRIPTION_VALUE,
  description,
  shopId,
});

export const submitProduct = () => ({
  type: SUBMIT_PRODUCT,
});


// DELETE PROMOTION

export const deletePromotion = (id) => ({
  type: DELETE_PROMOTION,
  id,
});

export const chargeDeletedDataPromotions = () => ({
  type: CHARGE_DELETED_PROMOTION,
});

// MODIF USER
export const changeInfoEmail = (email, idUser) => ({
  type: CHANGE_INFO_EMAIL,
  email,
  idUser,
});
export const changeInfoFirstname = (firstname) => ({
  type: CHANGE_INFO_FIRSTNAME,
  firstname,
});
export const changeInfoLastname = (lastname) => ({
  type: CHANGE_INFO_LASTNAME,
  lastname,
});
export const changeInfoStreet = (street) => ({
  type: CHANGE_INFO_STREET,
  street,
});
export const changeInfoZip = (zip) => ({
  type: CHANGE_INFO_ZIP,
  zip,
});
export const changeInfoCity = (city) => ({
  type: CHANGE_INFO_CITY,
  city,
});
export const changeInfoNumber = (number) => ({
  type: CHANGE_INFO_NUMBER,
  number,
});
export const changeInfoPhone = (phone) => ({
  type: CHANGE_INFO_PHONE,
  phone,
});
export const submitModifUser = () => ({
  type: SUBMIT_MODIF_USER,
});

/////// MODIFY PRODUCT \\\\\\\\

export const insertProductStore = (product) => ({
  type: INSERT_PRODUCT,
  product,
});

export const submitModifiedProduct = () => ({
  type: MODIFIED_PRODUCT,
});

export const chargeModifiedDataProducts = () => ({
  type: CHARGE_MODIFIED_PRODUCT,
});

// ADD PROMOTION
export const insertToSaleStore = (toSale) => ({
  type: INSERT_TO_SALE,
  toSale,
});
export const insertPromotionStore = () => ({
  type: INSERT_PROMOTION,
});
export const handleCloseOpenModInStore = () => ({
  type: OPEN_CLOSE_PROMOTION_MODALE,
});

// SUCCESS MODAL
export const handleOpenSuccessModal = () => ({
  type: OPEN_SUCCESS_MODAL,
});
export const handleCloseSuccessModal = () => ({
  type: CLOSE_SUCCESS_MODAL,
});
// Export
export default reducer;
