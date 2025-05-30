import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.page.html',
  styleUrls: ['./edit-account.page.scss'],
  standalone: false,
})
export class EditAccountPage implements OnInit {

  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
  }

  goBack(){
    this.location.back();
  }

  goToTabs() {
    this.router.navigate(['/tabs']);
    //console.log(" Button Pushed");
  }

}
