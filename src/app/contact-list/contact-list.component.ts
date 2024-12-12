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
      this.contacts[this.editingIndex] = this.editingContact; 
      this.cancelEditing(); 
    }
  }

  cancelEditing() {
    this.editingIndex = null;
    this.editingContact = null;
  }
}
