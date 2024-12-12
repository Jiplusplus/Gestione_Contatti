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
    if (this.isFormValid()) {
      this.addContact.emit(this.newContact);
      this.newContact = { name: '', phone: '' }; 
    }
  }

  
  isFormValid(): boolean {
    return this.newContact.name.trim().length > 0 && this.newContact.phone.trim().length > 0 && this.validatePhone(this.newContact.phone);
  }

  validatePhone(phone: string): boolean {
    return /^[0-9]+$/.test(phone); 
  }

  validatePhoneInput(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');
    this.newContact.phone = input.value;
  }
}
