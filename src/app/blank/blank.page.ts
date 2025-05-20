import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.page.html',
  styleUrls: ['./blank.page.scss'],
  standalone: false,
})
export class BlankPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(){
    this.location.back();
  }

}
