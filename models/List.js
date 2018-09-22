import ListCategory from './ListCategory';
import uuid from "react-native-uuid";

export default class List {
  constructor(name = '', listCategories = [new ListCategory('')]) {
    this.key = uuid.v1();
    this.name = name;
    this.listCategories = listCategories;
  }
}
