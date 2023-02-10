import {
    getUser
} from '../utils/asyncstorage';
export const switchRoute = () => {
    return async (dispatch) => {
        getUser().then(token => {
            if (token !== null) {
                dispatch({
                    type: "AUTH_SWITCH_ROUTE",
                    isLoading: false,
                    isAppLoading: false,
                    isLogedIn: true

                })

            }
            else {
                dispatch({
                    type: "AUTH_SWITCH_ROUTE",
                    isLoading: false,
                    isAppLoading: false,
                    isLogedIn: false

                })
            }

        })
    }
}

