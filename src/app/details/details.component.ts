import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../shared/contacts.service'
import { Contact } from '../shared/contact'
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {

	contact : Contact;
  	constructor(private contactService: ContactsService, private route: ActivatedRoute) { }

 	ngOnInit() {	
	  	this.route.params
	  	.map((params: Params) => this.contactService.getContact(+params['id']))
	    .subscribe(contact => this.contact = contact);
	}



}
