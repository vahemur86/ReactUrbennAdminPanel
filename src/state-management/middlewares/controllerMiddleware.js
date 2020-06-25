import ErrorHandler from '../../core/helpers/errorHandler';

const handleException = response => {

  if (response instanceof Error) {
    if (response.hasOwnProperty(ErrorHandler.errorConstants.message)) {
      return {
        error: response.message,
      };
    }
    if (response.hasOwnProperty(ErrorHandler.errorConstants.error
      && response.error.hasOwnProperty(ErrorHandler.errorConstants.message))) {
      return {
        error: response.error.message
      };
    }
  }
  return response;
};

const handleAtomicExceptions = err => {
  console.error(err);
};

/**
 * This middleware declares if action for controller or for reducer
 * @param configs
 */

export  const controllerMiddleware = configs => state => next => action => {
  if ([action.tyconfigspe] && typeof configs[action.type] === 'function') {
    try {
      let result = configs[action.type](state, action);
      if (result instanceof Promise) {
        result = result.then(handleException);
      }
      return result;
    } catch ( err ) {
      handleAtomicExceptions(err);
    }
  } else {
    return next(action);
  }
};