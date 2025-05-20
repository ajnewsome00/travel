import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.page.html',
  styleUrls: ['./edit-event.page.scss'],
  standalone: false,
})
export class EditEventPage implements OnInit {

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
