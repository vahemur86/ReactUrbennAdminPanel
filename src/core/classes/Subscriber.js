import {getGuid} from "../helpers/guidGenerator";

class Subscriber {
    constructor(callback) {
        this.id = getGuid();
        this.callBack = callback;
    }
}

export default Subscriber;