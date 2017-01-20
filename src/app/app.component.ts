import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	title : string = "Contacts";
  opened: boolean = false;

  constructor() {}

  private toggleSidebar() {
   	this.opened = !this.opened;
  }

  }

