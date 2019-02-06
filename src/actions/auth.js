export const login = creds => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  firebase
    .auth()
    .signInWithEmailAndPassword(creds.email, creds.password)
    .then(() => {
      dispatch({
        type: "LOGIN_SUCCESS"
      });
    })
    .catch(err => {
      dispatch({
        type: "LOGIN_ERROR",
        err
      });
    });
};

export const logout = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: "LOGOUT_SUCCESS"
        });
      });
  };
};

export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(() => {
        dispatch({
          type: "SIGNUP_SUCCESS"
        });
      })
      .catch(err => {
        dispatch({
          type: "SIGNUP_ERROR",
          err
        });
      });
  };
};
