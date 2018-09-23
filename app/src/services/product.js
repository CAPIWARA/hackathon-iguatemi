const RECOGNIZE_PRODUCT_URL = '';

/**
 * Envia uma imagem de um produto para a URL onde ele é identificado.
 * @param picture - Imagem de um produto.
 */
export const recognizeProduct = (picture) => {
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