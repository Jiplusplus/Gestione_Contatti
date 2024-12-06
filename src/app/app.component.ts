import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule per *ngFor
import { ContactListComponent } from './contact-list/contact-list.component';  // Importa il componente della lista dei contatti
import { AddContactComponent } from './add-contact/add-contact.component'; // Importa il componente per aggiungere un contatto

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ContactListComponent, AddContactComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contact Management';
  contacts = [
    { name: 'John Doe', phone: '123-456-7890' },
    { name: 'Jane Smith', phone: '098-765-4321' }
  ];

  addContact(contact: { name: string; phone: string }) {
    this.contacts.push(contact);  // Aggiungi il nuovo contatto alla lista
  }
}
