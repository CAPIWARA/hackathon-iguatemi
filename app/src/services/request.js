const GRAPHQL_URL = 'https://xlowsdje5i.execute-api.sa-east-1.amazonaws.com/dev/graphql';

/**
 * Realiza uma requisição com uma query GraphQL.
 * @param query 
 * @param variables 
 */
export const requestGraphQL = async (
  query = '',
  variables = {}
) => {
  const response = await fetch(GRAPHQL_URL, {
    method: 'POST',
    body: JSON.stringify({
      query,
      variables
    })
  });

  return response.json();
};
