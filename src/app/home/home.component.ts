import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  allRecipes: any = []

  constructor(private api: ApiService) { }

  getAllrecipes() {
    this.api.getAllRecipeAPI().subscribe((res: any) => {
      this.allRecipes = res
      console.log(this.allRecipes);
    })
  }

}
