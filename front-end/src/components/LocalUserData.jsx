const getUserData = () => JSON.parse(localStorage.getItem('user'));

export default getUserData;
// make sure to only call this AFTER Login or you'll get nothing (provided you logged out through the button before)
