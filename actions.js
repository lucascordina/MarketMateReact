import { DELETE_LIST , POPULATE_DEFAULT_LIST} from './reducer';

export function deleteList() {
    return {
        type: DELETE_LIST
    }
}

export function populateDefaultList() {
    return {
        type: POPULATE_DEFAULT_LIST
    }
}