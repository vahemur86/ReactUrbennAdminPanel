import HEADERS from '../constants/headers';
import { BEARER } from '../constants/util';
import JSONHelper from '../helpers/JSONhelper';
const API_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
};

class ApiHandler {
  // -- Static properties -- //

  // static token = '';

  // -- Constructor -- //
  constructor(domain, prefix, token = '', headers = {}) {
    this._domain = domain;
    this._prefix = prefix;
    this._token = token;
    this.headers= headers;
  }

  get(url = '') {
    return fetch(url, /*{
      // method: API_METHODS.GET,
      // headers: this.createHeaders()
    }*/).then(res => {
      return this.errorAndSuccessFilter(res)
    });
  }


  post(url = '', body) {
    console.log('body',body)
    return fetch(url, {
      method: API_METHODS.POST,
      headers :{'Content-Type': 'application/json'},
      body: JSONHelper.stringify(body)
    }).then(res =>this.errorAndSuccessFilter(res));
  }


  put(url = '', body , isFormData  ) {
    return fetch(url, {
      method: API_METHODS.PUT,
      headers: this.createHeaders(isFormData),
      body: isFormData ? body :  JSONHelper.stringify(body)
    }).then(res => this.errorAndSuccessFilter(res));
  }

  delete(url = '' , body) {
    return fetch(url, {
      method: API_METHODS.DELETE,
      headers: this.createHeaders(),
      body : JSONHelper.stringify(body)
    }).then(res => this.errorAndSuccessFilter(res));
  }

  createHeaders = (isFormdata) => {
    let headers = {
      [HEADERS.Accept]: HEADERS.ApplicationJson,
      [HEADERS.TimeZoneKey]: HEADERS.TimeZone,
      ...this.headers,
    };
    if (ApiHandler.token) {
      headers = {
        [HEADERS.Authorization]: `${BEARER} ${ApiHandler.token}`,
        ...headers
      };
    }
    if (!isFormdata) {
      headers = {
        [HEADERS.ContentType]: HEADERS.ApplicationJson,
        ...headers
      };
    }

    return headers;
  };

  errorAndSuccessFilter(res) {
    if(res.ok) {
      return res.json()
    } else {
      return {
        status: 0,
        responseStatus: res.status,
        errorMessage: res.statusText,
      }
    }
  }

  // -- Getters / Setters -- //

  get domain() {
    return this._domain;
  }

  set domain(value) {
    this._domain = value;
  }

  get preifx() {
    return this._preifx;
  }

  set preifx(value) {
    this._preifx = value;
  }

  get token() {
    return this._token;
  }

  set token(value) {
    this._token = value;
  }

  get prefix() {
    return this._prefix;
  }

  set prefix(value) {
    this._prefix = value;
  }

}

export default ApiHandler;
