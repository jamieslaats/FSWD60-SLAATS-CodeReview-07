import { Component, OnInit } from '@angular/core';
import { PhonelistService } from '../shared/phonelist.service';

@Component({
  selector: 'phonebook-list',
  templateUrl: './phonebook-list.component.html',
  styleUrls: ['./phonebook-list.component.css']
})
export class PhonebookListComponent implements OnInit {
	phonebookArray = [];
	showDeletedMessage : boolean;

  constructor(private phonelistService: PhonelistService) { }

  	ngOnInit() {
  		this.phonelistService.getPhonebook().subscribe(
  			(list) => {
  				this.phonebookArray = list.map( (item) => {
                                return {
                                        $key : item.key,
                                        ...item.payload.val()
                                }
                        })
                 });

}

	onDelete($key){
     if(confirm("Are you sure you want to delete this record?")){
       this.phonelistService.deleteContact($key);
       this.showDeletedMessage = true;
       setTimeout(()=> this.showDeletedMessage=false, 2000);
       }
   }

}

