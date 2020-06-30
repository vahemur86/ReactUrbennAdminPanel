import ApiHandler from '../../core/classes/ApiHandler';
import { API } from '../../core/constants/urls';

class UrbanAdminApiHandler extends ApiHandler {
    constructor(prefix) {
        super(API, prefix);
    }

    _checkResponse = (response) => {
        return response;
    };

    _createQuery(queryFields) {
        // when queryFields is undefined
        if (!queryFields) {
            return ''
        }

        // when queryFields is string or number
        if (typeof queryFields === 'string' || typeof queryFields === 'number') {
            return `${queryFields}`;
        }

        // when queryFields is array
        if (Array.isArray(queryFields)) {
            let query = '?';
            queryFields.forEach((queryField, index) => {
                if (index) {
                    query += `&${queryField.key}=${queryField.value}`
                } else {
                    query += `${queryField.key}=${queryField.value}`
                }
            });
            return query;
        }

        //when queryFields is object
        if (Object.keys(queryFields).length) {
            let searchQuery = '';
            for (let key in queryFields) {
                if (Array.isArray(queryFields[key])) {
                    queryFields[key].forEach(value => {
                        searchQuery = `${searchQuery}&${key}=${value}`
                    })
                } else {
                    searchQuery = `${searchQuery}&${key}=${queryFields[key]}`
                }
            }
            return `?${searchQuery.substring(1)}`;
        }
        return '';
    }

    get(endPoint = '', queryFields = '') {
        return super.get(`${this.domain}/${this.prefix}/${endPoint ? endPoint + '/' : ''}${this._createQuery(queryFields)}`).then(this._checkResponse.bind(this));
    }

    post(endPoint, formData = {}, queryFields = '') {
        return super.post(`${this.domain}/${this.prefix}/${endPoint ? endPoint  : ''}${this._createQuery(queryFields)}`, formData).then(this._checkResponse.bind(this));
    }

    put(endPoint, formData, queryFields = '', isFormData) {

        return super.put(`${this.domain}/${this.prefix}/${endPoint}${this._createQuery(queryFields)}`, formData, isFormData).then(this._checkResponse.bind(this));
    }

    delete(endPoint, queryFields = '' , body) {
        return super.delete(`${this.domain}/${this.prefix}/${endPoint}${this._createQuery(queryFields)}` , body).then(this._checkResponse.bind(this));
    }
}

export default UrbanAdminApiHandler;
