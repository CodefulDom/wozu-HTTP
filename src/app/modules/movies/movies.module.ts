import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayMoviesComponent } from './display-movies/display-movies.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DisplayMoviesComponent],
  exports: [DisplayMoviesComponent]
})
export class MoviesModule { }
