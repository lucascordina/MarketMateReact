import ListCategory from './ListCategory';

export default class List {
  constructor(name = '', listCategories = []) {
    this.name = name;
    this.listCategories = listCategories;
  }
}
