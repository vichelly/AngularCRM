import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-card',
  standalone: true,
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css'],
  imports: [FormsModule]
})
export class CreateCardComponent {
  card = {
    id: '1',
    content: 'TESTE'
  };

  createCard() {
    console.log('Card created:', this.card);
  };

  cancel() {
    console.log('Card canceled:', this.card);
  }
}
