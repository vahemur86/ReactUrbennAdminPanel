import Subscriber from './Subscriber';


class Observer {
    #subscribers = [];

    constructor(initialState){
        this.state = initialState
    }

    subscribe(callback){
        const subscriber = new Subscriber(callback);
        this.#subscribers.push(subscriber);
        return subscriber.id;
    }

    unsubscribe(id){
        this.#subscribers.filter(subscriber => subscriber.id !== id)
    }

    #notify = () => {
        this.#subscribers.forEach(subscriber => subscriber.callBack(this.state))
    };

    setState(data){
        this.state = data;
        this.#notify()
    };
}

export default Observer
