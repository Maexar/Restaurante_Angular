import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  name = '';
  email = '';
  subject = '';
  message = '';

  readonly sent = signal(false);

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    this.sent.set(true);
    form.resetForm();
  }
}
