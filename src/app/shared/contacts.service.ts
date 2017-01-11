import { Injectable } from '@angular/core';
import { Contact } from './contact';

@Injectable()
export class ContactsService {

  constructor() { }

  getContacts() : Contact[] {return this.CONTACT_LIST;}

  getContact(id : number) : Contact {return this.CONTACT_LIST[id - 1];}

  CONTACT_LIST : Contact[] = [
  	{name: "Adam", phone: "999-999-9999", email: "adam@gmail.com", id: 1},
  	{name: "Ali", phone: "000-000-0000", email: "ali@gmail.com", id: 2},
  	{name: "Mike", phone: "111-111-1111", email: "mike@gmail.com", id: 3}
  ]; 
}
