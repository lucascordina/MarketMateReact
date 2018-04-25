import ListService from './services/ListService';
import List from './models/List';

export const GET_LIST = 'MarketMateReact/list/LOAD';
export const GET_LIST_SUCCESS = 'MarketMateReact/list/LOAD_SUCCESS';
export const GET_LIST_FAIL = 'MarketMateReact/list/LOAD_FAIL';

export default function reducer(state = { list: new List() }, action) {
  switch (action.type) {
    case GET_LIST:
      return { ...state, loading: true };
    case GET_LIST_SUCCESS:
      return { ...state, loading: false, list: action.payload };
    case GET_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching ingredient',
      };
    default:
      return state;
  }
}

export function getList() {
  return {
    type: GET_LIST_SUCCESS,
    payload: ListService.GetDefaultList(),
  };
}
