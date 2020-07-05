const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('user')),
};

export const login = ({
  email, token, userId, refreshToken,
}) => ({
  type: 'LOG_IN',
  user: {
    email,
    token,
    refreshToken,
    userId,
  },
});

export const logout = () => ({
  type: 'LOG_OUT',
  user: null,
});

export const setNewTokens = ({ token, refreshToken }) => ({
  type: 'SET_NEW_TOKENS',
  token,
  refreshToken,
});

const authReducer = (state = INITIAL_STATE, action) => {
  const { type, ...payload } = action;
  const newState = {
    ...state,
    ...payload,
  };
  switch (type) {
    case 'SET_NEW_TOKENS':
    case 'LOG_IN':
      localStorage.setItem('user', JSON.stringify(newState.user));
      return newState;
    case 'LOG_OUT':
      localStorage.setItem('user', null);
      return newState;
    default:
      return state;
  }
};

export default authReducer;
