import { AppComponent } from './../app.component';

export class Recipe {
  constructor(public title:string, public ingredients: string[], public directions: string[]) {}

  edit() {
    return;
  }

}
