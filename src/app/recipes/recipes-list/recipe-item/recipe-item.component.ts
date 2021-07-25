import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../../recipe.model'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  //we need to get this component property from outside. use @Input
  @Input() recipe: Recipe;
  @Input() index: number;

  ngOnInit() {
  }

}
