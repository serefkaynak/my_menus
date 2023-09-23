function getDataFromQueryString(parameterName) {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get(parameterName);
    return myParam;
}