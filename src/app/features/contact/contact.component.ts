import { EmailService } from './../../services/email.service';
import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactInfo: any;
  contactForm!: FormGroup;
  submitted = false;
  isLoading = false;

  constructor(
    private contactService: ContactService,
    private emailService: EmailService
  ) {}
  ngOnInit(): void {
    this.contactService.getContact().subscribe((resp) => {
      this.contactInfo = resp;
    });

    this.contactForm = new FormGroup({
      fromName: new FormControl(null, [
        Validators.required,
        Validators.maxLength(70),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern('^[0-9]+$'),
      ]),
      message: new FormControl(),
    });
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    } else {
      this.isLoading = true;
      this.emailService.sendEmail(this.contactForm.value).subscribe(
        (resp) => {
          if (resp) {
            this.isLoading = false;
            alert('email sent successfully!');
            this.submitted = false;
            this.contactForm.reset();
          }
        },
        (error) => {
          alert('An error occured while sending email, please contact admin!');
          this.isLoading = false;
          this.submitted = false;
          this.contactForm.reset();
        }
      );
    }
  }
}
