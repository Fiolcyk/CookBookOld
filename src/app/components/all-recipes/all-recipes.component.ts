import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.scss']
})
export class AllRecipesComponent implements OnInit {

  constructor() { }

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
  ngOnInit() {
  }

}
