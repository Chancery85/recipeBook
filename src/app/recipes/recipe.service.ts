import {Recipe} from "./recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shoppinglist.service";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Chicken Chili',
  //     'This is a very tasty chicken chili',
  //     'https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F201401-xl-chicken-chili-with-beer-and-hominy.jpg%3Fitok%3DARfFxiO1&w=800&q=85',
  //     [
  //       new Ingredient('Chicken breast', 2),
  //       new Ingredient('Cans of beans', 3),
  //       new Ingredient('Onions', 1)
  //     ]),
  //
  //   new Recipe(
  //     'Perfect Fillet Mignon',
  //     'This will make your mouth water for sure...',
  //     'https://media3.s-nbcnews.com/j/newscms/2016_19/1080896/food-tim-love-beef-tenderloin-today-160509-tease_8d0b4197bd7361518ac0bd4ebfcd41ba.today-inline-large.jpg',
  //     [
  //       new Ingredient('Filet Mignon', 4),
  //       new Ingredient('Potatoes', 2),
  //       new Ingredient('Garlic Cloves', 6)
  //     ])
  // ];

  constructor(private slService: ShoppingListService) {}
  private recipes: Recipe[] = [];

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index:number, recipe: Recipe){
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index:number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
