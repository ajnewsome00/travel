import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})

export class Tab3Page {


  constructor(private router: Router) {
  }

  goToPage(page: string) {
    this.router.navigate(['/tabs/'+page]);
    //console.log(" Button Pushed");
  }

  logOut() {
    this.router.navigate(['']);
    //console.log(" Button Pushed");
  }
  

}
