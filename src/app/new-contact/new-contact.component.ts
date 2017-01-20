import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../shared/contact';

@Component({
	selector: 'app-new-contact',
	templateUrl: './new-contact.component.html',
	styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
	@Input() contact: Contact;

  	constructor(private router : Router) { }

	ngOnInit() {
	}

	onSubmit() {
	 	this.router.navigate(['/contacts']);
	}

}
