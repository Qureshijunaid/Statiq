import { writeStorage, readStorage, removeAllStorage, removeStorage } from './model';

/*
 * [wipeStorage functions remove all data from local storage]
 *    
*/
export const wipeStorage = async () => {
    return new Promise(function (resolve) {
        resolve(removeStorage('USER_CRED'));
    });
}

export const wipeStorageAll = async () => {
    return new Promise(function (resolve) {
        resolve(removeAllStorage());
    });
}

/*
 * [setUser functions set value of Token]
 * @param {value  string}   
 *    
*/
export const setUser = async (value) => {

    return new Promise(function (resolve) {
        resolve(writeStorage('USER_CRED', value));
    });
}
export const setDeletedUser = async (value) => {

    getDeletedUser().then(deletedSavedUser => {
        let parvalue = deletedSavedUser ??[]
        parvalue.push(value)
        return new Promise(function (resolve) {

            resolve(writeStorage('DELETE_CRED', parvalue));
        });
    })
}




/*
 * [getUser functions get user value from Token]  
 * @return {value}   
*/
export const getUser = async () => {
    return new Promise(function (resolve) {
        resolve(readStorage('USER_CRED'));
    });
}

export const getDeletedUser = async () => {
    return new Promise(function (resolve) {
        resolve(readStorage('DELETE_CRED'));
    });
}





