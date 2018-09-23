import { requestGraphQL } from '@/services/request';

const RECOGNIZE_PRODUCT_URL = '';

let count = 0;

/**
 * Obtém o produto.
 */
export const recoverProduct = async () => {
  count = count + 1;
  const productID = count % 2 === 0 ? '1' : '2';

  const reponse = await requestGraphQL(`
    query getProduct ($productID: String!) {
      product: getProduct (productId: $productID) {
        id
        name
        price
        store
        image
      }
    }
  `, { productID });

  const product = reponse.data.product;

  return reponse.data.product;
};


/**
 * Envia uma imagem de um produto para a URL onde ele é identificado.
 * @param picture - Imagem de um produto.
 */
export const recognizeProduct = async (picture) => {
  const body = new FormData();

  body.append('photo', {
    uri: picture.uri,
    type: 'image/jpeg',
    name: Date.now().toString(16)
  });

  const response = await fetch(RECOGNIZE_PRODUCT_URL, {
    body,
    method: 'POST',
  });

  return await response.json();
};