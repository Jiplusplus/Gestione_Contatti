import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactListComponent } from './contact-list.component';
import { CommonModule } from '@angular/common'; // Importa CommonModule per *ngFor

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactListComponent ], // Dichiarazione del componente
      imports: [ CommonModule ]  // Aggiungi CommonModule per *ngFor
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Rileva modifiche nel componente
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display contact names', () => {
    const compiled = fixture.nativeElement;
    const contactElements = compiled.querySelectorAll('.contact h3');
    expect(contactElements.length).toBe(2);  // Verifica che ci siano 2 contatti
    expect(contactElements[0].textContent).toContain('John Doe');
    expect(contactElements[1].textContent).toContain('Jane Smith');
  });
});
