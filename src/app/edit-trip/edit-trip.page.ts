import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.page.html',
  styleUrls: ['./edit-trip.page.scss'],
  standalone: false,
})
export class EditTripPage implements OnInit {

  data: any;

  constructor(private location: Location, private router: Router, private activatedRoute: ActivatedRoute) { 

    this.data=this.activatedRoute.snapshot.params;

  }

  ngOnInit() {
  }

  goBack(){
    this.location.back();
  }

  goToPage(page: string) {
    this.router.navigate(['/tabs/'+page]);
    //console.log(" Button Pushed");
  }

}
