import ListService from './services/ListService';
import List from './models/List';

export const POPULATE_DEFAULT_LIST = 'MarketMateReact/list/POPULATE_DEFAULT_LIST';
export const DELETE_LIST = 'MarketMateReact/list/DELETE_LIST';
export const DELETE_INGREDIENT = 'MarketMateReact/list/DELETE_INGREDIENT';
export const CHECK_INGREDIENT = 'MarketMateReact/list/CHECK_INGREDIENT';

export default function reducer(state = { list: new List() }, action) {
  switch (action.type) {
  case POPULATE_DEFAULT_LIST:
      return { ...state, list: ListService.GetDefaultList() };
    case DELETE_LIST:
      return { ...state, list: new List()};
    case DELETE_INGREDIENT:
      return { ...state, list: ListService.DeleteIngredientFromList(state.list, action.value)}
    case CHECK_INGREDIENT:
      return { ...state, list: ListService.CheckIngredientFromList(state.list, action.value)}
    default:
      return state;
  }
}