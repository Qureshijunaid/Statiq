const initialstate = {

    isAppLoading: true,
    isLoading: false,
    isLogedIn:false

}

const authReducer = (prevState = initialstate, action: { type: any; isLoading: any; isAppLoading: any; }) => {
    switch (action.type) {
        case "AUTH_SWITCH_ROUTE":
            return {
                ...prevState,
                isLoading: action.isLoading,
                isAppLoading: action.isAppLoading,
                isLogedIn:action.isLogedIn

            }
        default:
            return prevState
    }
}
export default authReducer