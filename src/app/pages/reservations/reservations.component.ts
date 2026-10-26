import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.scss'
})
export class ReservationsComponent {
  readonly slots = ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'];

  name = '';
  phone = '';
  email = '';
  date = '';
  guests = 2;
  notes = '';
  selectedSlot = '';

  readonly submitted = signal(false);

  incGuests(): void {
    if (this.guests < 12) this.guests++;
  }

  decGuests(): void {
    if (this.guests > 1) this.guests--;
  }

  pickSlot(slot: string): void {
    this.selectedSlot = slot;
  }

  onSubmit(form: NgForm): void {
    if (form.invalid || !this.selectedSlot) {
      return;
    }
    this.submitted.set(true);
  }

  newReservation(): void {
    this.submitted.set(false);
    this.name = '';
    this.phone = '';
    this.email = '';
    this.date = '';
    this.guests = 2;
    this.notes = '';
    this.selectedSlot = '';
  }
}
