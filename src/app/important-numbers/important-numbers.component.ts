import { Component, OnInit } from '@angular/core';
import { PhonelistService } from '../shared/phonelist.service';

@Component({
  selector: 'important-numbers',
  templateUrl: './important-numbers.component.html',
  styleUrls: ['./important-numbers.component.css']
})
export class ImportantNumbersComponent implements OnInit {
	phonebookArray = [];
   constructor(public phonelistService: PhonelistService) { }

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

}};