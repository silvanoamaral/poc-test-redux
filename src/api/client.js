export const getComments = () => {
  return fetch(`${process.env.REACT_APP_COMMENTS_API_URL}`)
    .then((response) => response.json())
    .catch((error) => ({ error }));
};
