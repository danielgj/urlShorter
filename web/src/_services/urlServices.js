import { urlConstants } from '../_constants';

export const urlServices = {
    add
};

function add(urlValue) {
    
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify({
            url: urlValue
        })
    };

    return fetch(urlConstants.URL, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    
    if (!response.ok) { 
        return Promise.reject(getErrorObject(response));
    }
    
    return response.json();
}

function getErrorObject(response) {
    
    var  errorText = "Se ha producido un error";
    
    if(response.status === 500) {
        errorText = "Error en el servidor";
    } 
    
    return {
        code: response.status,
        message: errorText
    }
    
}