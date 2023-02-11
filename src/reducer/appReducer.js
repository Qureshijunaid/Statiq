const initialstate = {

    cryptoData: [],
    btcData: []

}

const appReducer = (prevState = initialstate, action) => {
    switch (action.type) {
        case "Set_Crypto_Data":
            return {
                ...prevState,
                cryptoData: action.data

            }
        case "get_Btc_price":
            return {
                ...prevState,
                btcData: action.data

            }

        default:
            return prevState
    }
}
export default appReducer