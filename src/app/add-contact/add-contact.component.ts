import { Component, EventEmitter, Output } from '@angular/core';
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

  @Output() addContact = new EventEmitter<{ name: string; phone: string }>(); // Emetti un evento

  addContactToList() {
    this.addContact.emit(this.newContact); // Emesso l'evento con il nuovo contatto
    this.newContact = { name: '', phone: '' }; // Resetta il modulo
  }
}
