import axios from 'axios'
import { Dispatch } from 'redux';

export const getCrypto = () => {
    return async (dispatch: Dispatch) => {
        var config = {
            method: 'get',
            url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=7d',
            headers: {
                'Cookie': '__cf_bm=Jr1eHoAqEDwNES9s5StvP.v6mmFnPOfR4Gb0xWWrUKg-1676007560-0-Af9ot6T4qXa2SLuM37E8U/i6vYpU/Pskwo49fQ2MinQHrOGfn7MU/PXcSVPYYnpJwH7BZK5PMkeJAkeE4tW3TCg='
            }
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                dispatch({
                    type: "Set_Crypto_Data",
                    data: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}