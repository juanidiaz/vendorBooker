import API from "../../utils/API";


export const signIn = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then((res) => {
      localStorage.setItem('uid', (res.user.uid));
      window.location.reload();
      dispatch({ type: 'LOGIN_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err });
    });

  }
}

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' })
    });
    localStorage.clear();
  }
}

export const signUp = (newUser) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email, 
      newUser.password
    ).then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' })
    })
    .then( API.addUser(newUser)
    .then(res => {
      dispatch({ type: true  });
    }))
    .catch((err) => {
      dispatch({ type: 'SIGNUP_ERROR', err});
    });
  }
}
