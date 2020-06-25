const HEADERS = {
  Accept: 'Accept',
  ContentType: 'Content-Type',
  Authorization: 'Authorization',
  ApplicationJson: 'application/json',
  // ApplicationJson: 'application/json',
  formData : 'multipart/form-data',
  Urlencoded: 'application/x-www-form-urlencoded',
  TimeZoneKey: 'TimeZone',
  TimeZone: (new Date().getTimezoneOffset() / (-60)).toString(),
};


export default HEADERS;