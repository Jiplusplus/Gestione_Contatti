import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule per *ngFor

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  contacts = [
    { name: 'John Doe', phone: '123-456-7890' },
    { name: 'Jane Smith', phone: '098-765-4321' }
  ];
}
