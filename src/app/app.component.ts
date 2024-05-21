import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateCardComponent } from './components/cards/create-card/create-card.component';
import { FormsModule } from '@angular/forms';
import { CardListComponent } from './components/cards/card-list/card-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HomeComponent, CreateCardComponent, CardListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCRM';
}
