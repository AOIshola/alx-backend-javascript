export default function getFullResponseFromAPI(success) {
  return new Promise((res, rej) => {
    if (success === true) {
      res({ status: 200, body: 'success' });
    } else {
      rej(Error('The fake API is not working currently'));
    }
  });
}
