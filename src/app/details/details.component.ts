import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  params;
  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe(res => this.params = res)
  }

  ngOnInit() {
  }

  sendMeHome() {
    this.router.navigate([""]);
  }
}
