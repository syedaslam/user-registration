import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  formArray = [1];
  userForm!: FormGroup;
  onSuccessSubmit!: boolean;

  constructor(private fb: FormBuilder, private us: UserServiceService) {
    this.creatUserForm();
  }

  onAddAddress(index?: number) {
    index ? this.addressList.removeAt(index) : this.addressList.push(this.addressFormFields());
  }

  creatUserForm() {
    this.userForm = this.fb.group({
      userName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(),
      addressList: this.fb.array([this.addressFormFields()])
    })
  }

  get addressList(): FormArray {
    return this.userForm.get('addressList') as FormArray;
  }

  addressFormFields() {
    return this.fb.group({
      city: [''],
      state: [''],
      pincode: [''],
    })
  }

  onSubmitForm(formValues: any) {
    this.us.usersList.push(formValues);
    this.onSuccessSubmit = true;
    this.addressList.clear();
    this.userForm.reset();
    this.addressList.push(this.addressFormFields());
  }
  
}
