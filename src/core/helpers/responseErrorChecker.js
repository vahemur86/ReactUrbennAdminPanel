const responseErrorCheck = response => {

  if(response.hasOwnProperty('result')){
    return response.result
  }
  return response;
};

export default responseErrorCheck;