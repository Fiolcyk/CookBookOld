import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { SecondComponent } from './components/second/second.component';
import { FirstComponent } from './components/first/first.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AllRecipesComponent } from './components/all-recipes/all-recipes.component';
import { RecipeComponent } from './components/recipe/recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SecondComponent,
    FirstComponent,
    NavbarComponent,
    AllRecipesComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
