class ErrorHandler {
    static errorCodesEnum = {
        frontErrors: 400,
        unAuthorized: 401,
        serverError: 500,
    };

    static errorCodesWithErrorMessage = {
        400: 'front Error',
        401: 'Unauthorized',
        500: 'Server Error',
    };

    static errorConstants = {
        status: 'status',
        message: 'message',
        error: 'error',
    };

    static getErrorByStatus (errorStatus) {
        if (this.errorCodesWithErrorMessage.hasOwnProperty(errorStatus)){
            return this.errorCodesWithErrorMessage[errorStatus];
        }
        return null//errorStatus
    }

}

export default ErrorHandler