import { Component } from '@angular/core';



@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  isCollapsed = false;
  currentUsername = 'peeskillet'
}