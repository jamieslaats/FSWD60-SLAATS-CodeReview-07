import { Component, OnInit } from '@angular/core';
import { PhonelistService } from '../shared/phonelist.service';

@Component({
  selector: 'phonebook-list',
  templateUrl: './phonebook-list.component.html',
  styleUrls: ['./phonebook-list.component.css']
})
export class PhonebookListComponent implements OnInit {
	phonebookArray = [];

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

}

