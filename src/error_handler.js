import axios from 'axios'
import toastr from 'toastr'
import store from './store'

function errorResponseHandler(error) {
    // check for errorHandle config
    if( error.config.hasOwnProperty('errorHandle') && error.config.errorHandle === false ) {
        return Promise.reject(error);
    }

    // if has response show the error 
    if (error.response) {
        if(error.response.data.message == 'Unauthenticated.')
        {
            toastr.error(error.response.data.message, 'Oopps! Sorry');
            
            store.dispatch('logout')
            .then(() => {
                toastr.success('You will be redirected to Login page')
                window.location.href = "/login"
            })
        }
        // This action is unauthorized.
        if(error.response.data.message == 'This action is unauthorized.')
        {
            toastr.error(error.response.data.message, 'Oopps! Sorry');
            
            store.dispatch('logout')
            .then(() => {
                toastr.success('You will be redirected to Login page')
                window.location.href = "/login"
            })
        }
    }
}

// apply interceptor on response
axios.interceptors.response.use(
   response => response,
   errorResponseHandler
);

export default errorResponseHandler;