import { AsyncStorage } from "react-native";

import ListIngredient from './../models/ListIngredient';
import ListCategory from './../models/ListCategory';
import AmountType from './../models/AmountType';
import List from './../models/List';

// const PRIMARY_LIST_KEY = "PrimaryList";

function GenerateMockIngredients() {
  return [
    new ListIngredient('Chicken', '500', AmountType.GRAMS, false, false),
    new ListIngredient('Eggs', '6', null, true, false),
    new ListIngredient('Milk', '300', AmountType.MILLILITERS, false, true),
  ];
}

function GenerateMockListCategories() {
  return [
    new ListCategory('Dairy', GenerateMockIngredients()),
    new ListCategory('Produce', GenerateMockIngredients()),
    new ListCategory('Meat', GenerateMockIngredients()),
  ];
}

// function SaveList(list= List) {
//   try {
//    AsyncStorage.setItem(list.key, list);
//   } catch (error) {
//     //TODO: handle in firebase
//   }
// }

// function SavePrimaryList(list= List) {
//   try {
//    AsyncStorage.setItem(PRIMARY_LIST_KEY, list);
//   } catch (error) {
//     //TODO: handle in firebase
//   }
// }

// _getPrimaryList = async () => {
//   try {
//     const primaryList = await AsyncStorage.getItem(PRIMARY_LIST_KEY);
//     if (primaryList === null) {
//       console.log("no list found");
//     }
//     return primaryList;
//   } catch (error) {
//     //TODO: handle with firebase
//     console.log('Error retrieving primary list');
//     return undefined;
//   }
// }

export default class ListService {
  static GetDefaultList() {
    return new List('My List', GenerateMockListCategories());
  }
}


