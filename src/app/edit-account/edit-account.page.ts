import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.page.html',
  styleUrls: ['./edit-account.page.scss'],
  standalone: false,
})
export class EditAccountPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(){
    this.location.back();
  }

}
