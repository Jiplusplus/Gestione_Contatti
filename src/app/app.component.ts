import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule per *ngFor
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AddContactComponent, ContactListComponent],  // Aggiungi CommonModule per ngFor
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contact Management';
}
