const initialState = {
    email: '',
    password: '',
    formContact: {
      name: '',
      number: ''
    }
  };

  const formReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_EMAIL':
        return { ...state, email: action.payload };
      case 'SET_PASSWORD':
        return { ...state, password: action.payload };
      case 'SET_NAME':
        return { ...state, 
          formContact: {...state.formContact, name: action.payload}
        };
      case 'SET_NUMBER':
        return { ...state, 
          formContact: {...state.formContact, number: action.payload} };
      default:
        return state;
    }
  };

  export const setEmail = (email) => ({
    type: 'SET_EMAIL',
    payload: email,
  });
  
  export const setPassword = (password) => ({
    type: 'SET_PASSWORD',
    payload: password,
  });
  export const setName = (name) => ({
    type: 'SET_NAME',
    payload: name,
  });
  
  export const setNumber = (number) => ({
    type: 'SET_NUMBER',
    payload: number,
  });

export default formReducer