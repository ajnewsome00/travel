import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor(private router: Router) {}

  goToPage(page: string) {
    this.router.navigate(['/tabs/'+page]);
    //console.log(" Button Pushed");
  }

}
