import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PhonelistService {

  constructor() { }
  	form = new FormGroup({
  		$key: new FormControl(null),
  		firstName: new FormControl(''),
  		lastName: new FormControl(''),
  		phoneNumber: new FormControl(''),
  	})
}
