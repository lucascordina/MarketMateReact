import ListCategory from './ListCategory';

export default class List {
  constructor(name = '', listCategories = [new ListCategory('')]) {
    this.name = name;
    this.listCategories = listCategories;
  }
}
