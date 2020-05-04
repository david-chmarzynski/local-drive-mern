import slugify from 'slugify';

// retourne la recette qui correspond à un slug donné
// eslint-disable-next-line import/prefer-default-export
export const getShopBySlug = (slug, shops) => {
  // find permet de rechercher le premier élément qui correspond à la condition
  // retourne un seul élément (alors que filter retourne un tableau)
  const searchedShop = shops.find((shop) => (
    slugify(shop.name) === slug
  ));
  return searchedShop;
};
