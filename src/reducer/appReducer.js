const initialstate = {

    cryptoData: []

}

const appReducer = (prevState = initialstate, action) => {
    switch (action.type) {
        case "Set_Crypto_Data":
            return {
                ...prevState,
                cryptoData: action.data

            }
        default:
            return prevState
    }
}
export default appReducer