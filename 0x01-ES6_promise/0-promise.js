export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve('Returned!');
    reject(Error('Not returned!'));
  });
}
