import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  recipes = [
    {
      name: 'recipe1',
      value: 'value1',
    },
    {
      name: 'recipe2',
      value: 'value2',
    },
    {
      name: 'recipe3',
      value: 'value3',
    },
    {
      name: 'recipe3',
      value: 'value3',
    },
    {
      name: 'recipe3',
      value: 'value3',
    },
    {
      name: 'recipe3',
      value: 'value3',
    },
    {
      name: 'recipe3',
      value: 'value3',
    },
    {
      name: 'recipe3',
      value: 'value3',
    },
    {
      name: 'recipe3',
      value: 'value3',
    },
    {
      name: 'recipe3',
      value: 'value3',
    },
    {
      name: 'recipe3',
      value: 'value3',
    },
    {
      name: 'recipe3',
      value: 'value3',
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
