const initState = {
    authError: null,
    creatingUser: ""
  }
  
  const authReducer = (state = initState, action) => {
    switch(action.type){
      case 'LOGIN_ERROR':
        console.log('login error');
        return {
          ...state,
          authError: 'Login failed'
        }
  
      case 'LOGIN_SUCCESS':
        console.log('login success');
        return {
          ...state,
          authError: null
        }
  
      case 'SIGNOUT_SUCCESS':
        console.log('signout success');
        return state;
  
      case 'SIGNUP_SUCCESS':
        console.log('signup success')
        return {
          ...state,
          authError: null
        }
  
      case 'SIGNUP_ERROR':
        console.log('signup error')
        return {
          ...state,
          authError: 'Sign Up failed'
        }
  
      default:
        return state
    }
  };
  
  export default authReducer;