
import {  Component, ChangeDetectorRef, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators  } from '@angular/forms';
import { SpeakerRegistration } from '../../models/speaker-registration';
import { SpeakerService } from '../../services/speaker.service';

@Component({
  selector: 'pt-speaker-registration',
  templateUrl: './speaker-registration.component.html',
  styleUrls: ['./speaker-registration.component.css']
})
export class SpeakerRegistrationComponent implements OnInit {
  speakerRegistrationForm: FormGroup;
  speakerRegistrationData:SpeakerRegistration;
  submitted = false;
  errorMessage:string=''
  fileToUpload: any;
  // @ViewChild('fileInput') el: ElementRef ;
  imageUrl: any = "https://i.ibb.co/fDWsn3G/buck.jpg";
  editFile: boolean = true;
  removeUpload: boolean = false;
  constructor(private formBuilder: FormBuilder, private speakerService:SpeakerService,private cd: ChangeDetectorRef) {
    this.speakerRegistrationForm=this.formBuilder.group({});
    this.speakerRegistrationData= <SpeakerRegistration>{};
   }


  ngOnInit(): void {
    this.speakerRegistrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      topic: ['', Validators.required],
      theme: ['', Validators.required],
      oneLineProfile: ['', Validators.required],
      phone: ['', Validators.required],
      country: ['', Validators.required],
      profilePicture:['', Validators.required],
      description: ['', Validators.required]
  });
  }
  // convenience getter for easy access to form fields
  get f() { return this.speakerRegistrationForm.controls; }
  uploadFile(event:any) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    this.fileToUpload = file;
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.speakerRegistrationForm.patchValue({
          profilePicture: reader.result
        });
        this.editFile = false;
        this.removeUpload = true;
      }
      // ChangeDetectorRef since file is loading outside the zone
      this.cd.markForCheck();        
    }
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.speakerRegistrationForm.invalid) {
        return;
    }
    let registrationData= new FormData();
    registrationData.append("age", this.speakerRegistrationForm.controls['age'].value);
    registrationData.append("country", this.speakerRegistrationForm.controls['country'].value);
    registrationData.append("description", this.speakerRegistrationForm.controls['description'].value);
    registrationData.append("email", this.speakerRegistrationForm.controls['email'].value);
    registrationData.append("gender", this.speakerRegistrationForm.controls['gender'].value);
    registrationData.append("oneLineProfile", this.speakerRegistrationForm.controls['oneLineProfile'].value);
    registrationData.append("phone", this.speakerRegistrationForm.controls['phone'].value);
    registrationData.append("name", this.speakerRegistrationForm.controls['name'].value);
    registrationData.append("theme", this.speakerRegistrationForm.controls['theme'].value);
    registrationData.append("topic", this.speakerRegistrationForm.controls['topic'].value);
    registrationData.append("profilePicture", this.speakerRegistrationForm.controls['profilePicture'].value);

    registrationData.append("image", this.fileToUpload );

    this.speakerService.saveSpeakerRegistration(registrationData).subscribe({
      next: (data:SpeakerRegistration) => {
        debugger
          this.speakerRegistrationData = data;
      },
      error: (error:any) => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
    })

    // this.speakerService.saveSpeakerRegistration(this.speakerRegistrationForm.value).subscribe({
    //   next: (data:SpeakerRegistration) => {
    //     debugger
    //       this.speakerRegistrationData = data;
    //   },
    //   error: (error:any) => {
    //       this.errorMessage = error.message;
    //       console.error('There was an error!', error);
    //   }
    // })
    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.speakerRegistrationForm.value, null, 4));
}

onReset() {
    this.submitted = false;
    this.speakerRegistrationForm.reset();
}

}
