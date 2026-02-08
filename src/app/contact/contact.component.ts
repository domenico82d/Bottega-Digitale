import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [FormsModule]
})
export class ContactComponent {
  sending = false;

  constructor(private router: Router) {}

  async onSubmit(form: NgForm) {
    if (form.invalid || this.sending) return;

    this.sending = true;

    const data = new URLSearchParams();
    data.set('form-name', 'contact');
    data.set('name', form.value.name ?? '');
    data.set('surname', form.value.surname ?? '');
    data.set('email', form.value.email ?? '');
    data.set('message', form.value.message ?? '');
    data.set('bot-field', form.value['bot-field'] ?? '');

    try {
    const res = await fetch(window.location.href, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString()
      });

      if (!res.ok) throw new Error('Submit failed');

      form.resetForm();
      this.router.navigateByUrl('/ringraziamenti');
    } catch (e) {
      alert('Invio non riuscito. Riprova tra poco.');
    } finally {
      this.sending = false;
    }
  }
}
