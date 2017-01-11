import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../shared/contacts.service';
import { Contact } from '../shared/contact';
import { Router } from '@angular/router'

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {

  contactList : Contact[] = [];
  	constructor(private contactService: ContactsService, private router : Router) {}

  	ngOnInit() {
  		this.contactList = this.contactService.getContacts();
  	}

  	onSelect(contact: Contact) {
    	this.router.navigate(['/contacts', contact.id]);
  	}

}
