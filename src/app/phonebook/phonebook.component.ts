import { Component, OnInit } from '@angular/core';
import { PhonelistService } from '../shared/phonelist.service';

@Component({
  selector: 'phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhonebookComponent implements OnInit {

  constructor(private phonelistService: PhonelistService) { }
 	submitted: boolean;
 	formControls = this.phonelistService.form.controls;
 	showSuccessMessage: boolean;
 
 ngOnInit() {
 }

 onSubmit(){
   this.submitted = true;
   if(this.phonelistService.form.valid){
         if(this.phonelistService.form.get("$key").value == null )
           this.phonelistService.insertPhoneNumber(this.phonelistService.form.value);
           else
            this.phonelistService.updatePhoneNumber(this.phonelistService.form.value);
           this.showSuccessMessage =true;// we set the property to true
       setTimeout(()=> this.showSuccessMessage=false,2000); // we used setTimeout here so after 3 second the showSuccessMessage value will be false
       this.submitted = false;
       this.phonelistService.form.reset();// the form will be empty after new record created
         }
   }
 }