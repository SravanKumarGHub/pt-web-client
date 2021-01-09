import {  Component, ChangeDetectorRef, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators  } from '@angular/forms';
import { ContactData } from '../../models/contact-details';
import { ContactUsService } from '../../services/contact-us.service';

@Component({
    selector:'contact-us',
    templateUrl:'./contact.page.html'
})

export class ContactPage{
  contactForm: FormGroup;
  contactData:ContactData;
  submitted = false;
  errorMessage:string=''
    constructor(private formBuilder: FormBuilder,private cd: ChangeDetectorRef,private contactUsService:ContactUsService) {
        this.contactForm=this.formBuilder.group({});
        this.contactData= <ContactData>{};
     }   
     
     ngOnInit(): void {
        this.contactForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          phone: ['', Validators.required],
          message: ['', Validators.required]
      });
      }
  // convenience getter for easy access to form fields
      get f() { return this.contactForm.controls; }
      onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.contactForm.invalid) {
            return;
        }
        this.contactUsService.saveContactDetails(this.contactForm.value).subscribe({
            next: (data:ContactData) => {
              debugger
                this.contactData = data;
            },
            error: (error:any) => {
                this.errorMessage = error.message;
                console.error('There was an error!', error);
            }
          })

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.contactForm.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.contactForm.reset();
    }
}