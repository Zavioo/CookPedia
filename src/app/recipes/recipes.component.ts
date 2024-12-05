import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SearchPipe } from '../pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,SearchPipe,FormsModule,NgxPaginationModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})

export class RecipesComponent {
  searchKey:string = ""
  dummyAllRecipes: any = []
  p: number = 1;
  // filterAllRecipes(key: string, value: string) {
  //   this.allRecipes = this.dummyAllRecipes.filter((item: any) => item[key].includes(value))
  // }

}
