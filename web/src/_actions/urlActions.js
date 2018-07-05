import { urlConstants } from '../_constants';
import { urlServices } from '../_services';

export const urlActions = {
    add,
    resetForm
};

function add(urlValue) {
    return dispatch => {
        dispatch(request());

        urlServices.add(urlValue)
            .then(
                url => dispatch(success(url)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: urlConstants.ADD_URL_REQUEST } }
    function success(url) { return { type: urlConstants.ADD_URL_SUCCESS, url } }
    function failure(error) { 
        return { type: urlConstants.ADD_URL_FAILURE, error } 
    }
}

function resetForm() {
    return { type: urlConstants.RESET_URL_FORM };
}
