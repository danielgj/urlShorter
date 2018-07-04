import { urlConstants } from '../_constants';

export function urls(state = {}, action) {
  switch (action.type) {
    case urlConstants.ADD_URL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case urlConstants.ADD_URL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        shortedUrl: action.url
      };
    case urlConstants.ADD_URL_FAILURE:
      return { 
        ...state,
        loading: false,
        error: action.error
    };
    
    default:
      return state
  }
}