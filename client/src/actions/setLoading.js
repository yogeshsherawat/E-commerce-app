function setLoadingFalse() {
    return ({
        type: 'CHK_LOADING',
        payload: false
    })
}

function setLoadingTrue() {
    return ({
        type: 'CHK_LOADING',
        payload: true
    });
}

export { setLoadingFalse, setLoadingTrue };