import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  @Input() contacts: { name: string; phone: string }[] = [];
  searchQuery: string = ''; 

  editingIndex: number | null = null; 
  editingContact: { name: string; phone: string } | null = null;

  isContactValid(contact: { name: string; phone: string }): boolean {
    return contact.name.trim().length > 0 && /^[0-9]+$/.test(contact.phone.trim());
  }

  get filteredContacts() {
    return this.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
      contact.phone.includes(this.searchQuery)
    );
  }

  startEditing(index: number) {
    this.editingIndex = index;
    this.editingContact = { ...this.contacts[index] }; 
  }

  saveContact() {
    if (this.editingIndex !== null && this.editingContact) {
      if (this.isContactValid(this.editingContact)) {
        this.contacts[this.editingIndex] = this.editingContact; 
        this.cancelEditing(); 
      } else {
        alert("Contatto non valido! Assicurati che il nome non sia vuoto e che il numero contenga solo numeri.");
      }
    }
  }
  
  cancelEditing() {
    this.editingIndex = null;
    this.editingContact = null;
  }

  deleteContact(index: number) {
    if (confirm('Sei sicuro di eliminare questo contatto?')) {
      this.contacts.splice(index, 1);
    }
  }
}
