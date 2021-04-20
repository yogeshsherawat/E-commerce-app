
function getItem(data) {
    
    return ({
        type: 'GET_ITEM',
        payload: data
    }
    );
    
}
export default getItem;