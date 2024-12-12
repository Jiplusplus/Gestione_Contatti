import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  newContact = { name: '', phone: '' };

  @Output() addContact = new EventEmitter<{ name: string; phone: string }>(); 

  addContactToList() {
    this.addContact.emit(this.newContact);
    this.newContact = { name: '', phone: '' };
  }
}
