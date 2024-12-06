import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule per *ngFor

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule], // Aggiungi CommonModule per *ngFor
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  @Input() contacts: { name: string; phone: string }[] = [];
}
