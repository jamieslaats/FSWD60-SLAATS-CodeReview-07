import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class PhonelistService {

  constructor(private firebase: AngularFireDatabase) { }
  	phonebookList: AngularFireList<any>;
  	
  	form = new FormGroup({
  		$key: new FormControl(null),
  		firstName: new FormControl('', Validators.required),
  		lastName: new FormControl('', Validators.required),
  		phoneNumber: new FormControl('', [Validators.required, Validators.minLength(8)]),
  	});

  	getPhonebook(){
  		this.phonebookList = this.firebase.list('contacts');
  		return this.phonebookList.snapshotChanges();
  	};

  	insertPhoneNumber(phonebook){
  		this.phonebookList.push({
  			firstName: phonebook.firstName,
  			lastName: phonebook.lastName,
  			phoneNumber: phonebook.phoneNumber,
  		});
  	}
    populateForm(phonebook){
      this.form.setValue(phonebook);
  }
    updatePhoneNumber(phonebook){
      this.phonebookList.update(phonebook.$key,{
        firstName: phonebook.firstName,
        lastName: phonebook.lastName,
        phoneNumber: phonebook.phoneNumber,
      });
  }
    deleteContact($key: string){
      this.phonebookList.remove($key);
  }
}
