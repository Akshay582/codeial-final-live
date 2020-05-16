export function getFormBody(params) {
  let formBody = [];

  for (let property in params) {
    let encodedKey = encodeURIComponent(property); // 'user name'=='user%20name'
    let encodedValue = encodeURIComponent(params[property]);
    formBody(encodedKey + '=' + encodedValue);
  }
  return formBody.join('&');
}
