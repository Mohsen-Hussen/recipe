import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  // providers: [RecipeService],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recepieService: RecipeService) {}

  ngOnInit(): void {}

  onSelect() {
    this.recepieService.recipeSelected.emit(this.recipe);
  }
}
