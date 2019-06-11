import { Component } from '@angular/core';
import {Recipe} from './models/recipe.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe Box';
  recipes: Recipe[]= [
    new Recipe ('Banana Cake', ['100 gr of Butter', ' 2 eggs ' ,' 3 bananas'] , ['Preheat oven to 350 degrees F (175 degrees C). Grease and flour 2 - 8 inch round pans. In a small bowl, whisk together flour, baking soda and salt; set aside.', 'In a large bowl, cream butter, white sugar and brown sugar until light and fluffy. Beat in eggs, one at a time. Mix in the bananas. Add flour mixture alternately with the buttermilk to the creamed mixture. Stir in chopped walnuts. Pour batter into the prepared pans.','Bake in the preheated oven for 30 minutes. Remove from oven, and place on a damp tea towel to cool.']),
    new Recipe ('Chocolate Cake', ['100 gr of Butter', '2 eggs', '3 bananas'] , ['Preheat oven to 350 degrees F (175 degrees C). Grease and flour 2 - 8 inch round pans. In a small bowl, whisk together flour, baking soda and salt; set aside.', 'In a large bowl, cream butter, white sugar and brown sugar until light and fluffy. Beat in eggs, one at a time. Mix in the bananas. Add flour mixture alternately with the buttermilk to the creamed mixture. Stir in chopped walnuts. Pour batter into the prepared pans.','Bake in the preheated oven for 30 minutes. Remove from oven, and place on a damp tea towel to cool.']),
    new Recipe ('Macaroni Cheese Salmon', ['100 gr of Butter', '2 eggs', '3 bananas'] , ['Preheat oven to 350 degrees F (175 degrees C). Grease and flour 2 - 8 inch round pans. In a small bowl, whisk together flour, baking soda and salt; set aside.', 'In a large bowl, cream butter, white sugar and brown sugar until light and fluffy. Beat in eggs, one at a time. Mix in the bananas. Add flour mixture alternately with the buttermilk to the creamed mixture. Stir in chopped walnuts. Pour batter into the prepared pans.','Bake in the preheated oven for 30 minutes. Remove from oven, and place on a damp tea towel to cool.']),
    new Recipe ('Coq au vin', ['100 gr of Butter', '2 eggs', '3 bananas'] , ['Preheat oven to 350 degrees F (175 degrees C). Grease and flour 2 - 8 inch round pans. In a small bowl, whisk together flour, baking soda and salt; set aside.', 'In a large bowl, cream butter, white sugar and brown sugar until light and fluffy. Beat in eggs, one at a time. Mix in the bananas. Add flour mixture alternately with the buttermilk to the creamed mixture. Stir in chopped walnuts. Pour batter into the prepared pans.','Bake in the preheated oven for 30 minutes. Remove from oven, and place on a damp tea towel to cool.'])
  ]

  selectedRecipe: Recipe = null;

  selectRecipe(recipe) {
    this.selectedRecipe = recipe;
  }
  finishedEditing() {
   this.selectedRecipe = null;
 }
}
