import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ContactListComponent } from './contact-list/contact-list.component';  
import { AddContactComponent } from './add-contact/add-contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ContactListComponent, AddContactComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gestione contatti';
  contacts = [
    { name: 'Mattia', phone: '123456789' },
    { name: 'Stefano', phone: '987456123' },
    { name: 'Kai', phone: '569874123'}
  ];

  addContact(contact: { name: string; phone: string }) {
    this.contacts.push(contact);
  }
}
