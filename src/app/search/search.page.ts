import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: false,
})

export class SearchPage implements OnInit {

  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
  }
  
  goBack(){
    this.location.back();
  }
 
}
