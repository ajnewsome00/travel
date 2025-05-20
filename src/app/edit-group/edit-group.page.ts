import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.page.html',
  styleUrls: ['./edit-group.page.scss'],
  standalone: false,
})
export class EditGroupPage implements OnInit {

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
