class JSONHelper {

  static stringify(data) {
    try {
      return JSON.stringify(data);
    } catch(err) {
      throw new Error(err);
    }
  }
  static parse(data) {
    try {
      return JSON.parse(data);
    } catch(err) {
      alert("PLEASE TRY LATER");
    }
  }
}

export default JSONHelper;