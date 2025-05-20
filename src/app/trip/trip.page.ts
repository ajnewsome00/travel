import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-trip',
  templateUrl: './trip.page.html',
  styleUrls: ['./trip.page.scss'],
  standalone: false,
})

export class TripPage implements OnInit {

  data: any;

  constructor(private location: Location, private router: Router, private activatedRoute: ActivatedRoute) { 

   //console.log(this.activatedRoute.snapshot.params); // Output: { id: '123' }
   this.data=this.activatedRoute.snapshot.params;
   //console.log(this.data);

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

  action(response: string) {
    console.log(response);
    
  }

}
