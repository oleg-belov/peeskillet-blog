import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'profile-page',
  templateUrl: './profile-page.component.html'
})
export class ProfilePageComponent implements OnInit {
  username;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.forEach((params: any) => {
      this.username = params.userId
    });
  }
}
