import { requestGraphQL } from '@/services/request';

/**
 * Obtém os dados do usuário.
 */
export const recoverUser = async () => {
  const user = await requestGraphQL(`
    query getUser {
      user: getUser {
        id
        name
        avatar
        address
      }
    }
  `);

  console.log(user);

  return user.data.user;
};
