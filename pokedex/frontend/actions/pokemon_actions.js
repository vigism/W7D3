import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";


export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const fetchAllPokemon = () => dispatch => (
  APIUtil.fetchAllPokemon().then(res => {
    return dispatch(receiveAllPokemon(res));
  })
);