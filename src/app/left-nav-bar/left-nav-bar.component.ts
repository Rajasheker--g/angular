import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-nav-bar',
  templateUrl: './left-nav-bar.component.html',
  styleUrls: ['./left-nav-bar.component.css']
})
export class LeftNavBarComponent implements OnInit {
  selectedItem;
  constructor(private router: Router) {  }

  ngOnInit() {
    if (location.pathname == "/aboutme") {
      this.selectedItem = "aboutme";
    } else {
      this.selectedItem = "home";
    }
  }

  clickEvent(event, item) {
    event.target.classList.remove('btn-info');
    this.selectedItem = item;
  }
}
