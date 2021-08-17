/* eslint-disable */
import fetch from 'isomorphic-fetch';

class Request {
  constructor() {
    this._doGetParam = this._doGetParam.bind(this);
    this._doPostParam = this._doPostParam.bind(this);
    // smartr
    this.firebaseHeaders = {
      'Content-Type': 'application/json',
      'Authorization':
        'key=AAAA18sjgLE:APA91bF8HAiTFebDDVEk54FvXRN5r0mgi-o_oEF2lRrHoDg6OjajaD1qByX5a1UJerSerEIOkA8NcyBi-0lwn77gsInrZm4XO-FkbZrnrYfp8eKKDojwiUFBThfpVdruqZ6MNNHY0V29',
    };
    // personal
    // this.firebaseHeaders = {
    //   'Content-Type': 'application/json',
    //   Authorization: 'key=AAAAQI-iYCQ:APA91bHcy4wwTLW4To89zUI247e5-2fD56AHpK47X3Mvcwz8curcEIK3Y0agugpt_H38AA_UBlEfRoBz8QveuqWuHN7oWRiSUtTuS4yhY_iXRFcloJmGVi7abTR6hF7MFlCUDcfvZqW_',
    // };
  }

  _doGetParam(headers) {
    return {
      method: 'GET',
      headers,
    };
  }

  _doDeleteParam(headers, requestBody) {
    return {
      method: 'DELETE',
      dataType: 'JSON',
      headers,
      body: JSON.stringify(requestBody),
    };
  }

  _doPostParam(headers, requestBody) {
    return {
      method: 'POST',
      dataType: 'JSON',
      headers,
      body: JSON.stringify(requestBody),
    };
  }

  doGetFirebase(url) {
    const param = this._doGetParam(this.firebaseHeaders);
    return fetch(url, param);
  }

  doPostFirebase(url, body) {
    const params = this._doPostParam(this.firebaseHeaders, body);
    return fetch(url, params);
  }
}

const requestUtils = new Request();

export default requestUtils;
