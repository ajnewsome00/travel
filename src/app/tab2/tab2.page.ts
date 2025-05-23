import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  current: any;
  

  future: any;
  

  constructor(private router: Router) {

    this.current=

    {
      "id": 1,
      "name": "Birthday Trip",
      "location": "Paris",
      "startDate": "3/4/2025",
      "end date": "11/22/2024",
      "description": "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
      "guests": [
        {
          "firstName": "Huey",
          "lastName": "McDuck",
          "rsvp": "confirmed",
        },
        {
          "firstName": "Duey",
          "lastName": "McDuck",
          "rsvp": "tentative",
        },
        {
          "firstName": "Luey",
          "lastName": "McDuck",
          "rsvp": "declined",
        },
      ],
      "announcements": [
        {
          "createdDate": "1/24/2025",
          "time": "17:44",
          "message": "Long message - Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
          "creator": [
            {
              "first_name": "Duey",
              "last_name": "McDuck",
              "rsvp": "tentative",
            },
          ]
        },
        {
          "createdDate": "1/24/2025",
          "time": "10:44",
          "message": "Short Message - Meet here",
          "creator": [
            {
              "firstName": "Luey",
              "lastName": "McDuck",
              "rsvp": "tentative",
            },
          ]
        },
      ],
      "expenses": [
        {
          "paid": false,
          "name": "Travel Beach Blanket",
          "createdDate": "8/28/2024",
          "cost": "$25.02",
          "description": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
          "buyer": 
          {
            "firstName": "Huey",
            "lastName": "McDuck",
          },
          "event": 
          {
            "name": "Party",
          },
        }, 
      ],
      "itenerary": [
        {
          "startTime": "08:44",
          "name": "AA1234",
          "type": "airplane",
          "description": "Paris",
          "date": "3/4/2025",
        },
        {
          "startTime": "11:44",
          "name": "Party",
          "type": "calendar-clear",
          "description": "",
          "date": "3/4/2025",
        },
        {
          "startTime": "11:44",
          "name": "Hilton",
          "type": "bed",
          "description": "Check-In Time : 4:00 PM",
          "date": "3/4/2025",
        },
      ],
      "rsvp": "09/15/2024"
    };
    this.future=true;
  }

  goToPage(page: string) {
    this.router.navigate(['/tabs/'+page]);
    //console.log(" Button Pushed");
  }

}
