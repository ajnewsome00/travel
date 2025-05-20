import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: false,
})
export class ChatPage implements OnInit {

  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
  }

  goBack(){
    this.location.back();
  }

}
