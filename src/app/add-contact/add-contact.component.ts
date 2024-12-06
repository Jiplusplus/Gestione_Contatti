import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule per *ngFor
import { FormsModule } from '@angular/forms';   // Importa FormsModule per ngModel

@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [CommonModule, FormsModule], // Aggiungi FormsModule qui
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  newContact = { name: '', phone: '' };

  addContact() {
    console.log('New contact added:', this.newContact);
    // Aggiungi qui la logica per aggiungere il contatto (es. aggiornare una lista)
    this.newContact = { name: '', phone: '' }; // Resetta il modulo
  }
}
