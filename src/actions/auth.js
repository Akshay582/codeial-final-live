import { LOGIN_START } from './actionTypes';
import { APIurls } from '../helpers/urls';
import { getFormBody } from '../helpers/utils';

export function startLogIn() {
  return {
    type: LOGIN_START,
  };
}

export function LogIn(email, password) {
  return (dispatch) => {
    const url = APIurls.login();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody({ email, password }),
    });
  };
}
