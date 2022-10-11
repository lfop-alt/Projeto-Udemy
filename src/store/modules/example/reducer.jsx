import types from '../types';

const initialState = {
  botaoClicado: false,
};

// eslint-disable-next-line default-param-last
export default (state = initialState, action) => {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }
    case types.BOTAO_CLICADO_REQUEST: {
      console.log('Request fazendo');
      return state;
    }
    case types.BOTAO_CLICADO_FAIL: {
      console.log('Fail');
      return state;
    }

    default:
      return state;
  }
};
