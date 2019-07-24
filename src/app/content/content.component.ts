import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  users: Object
  gols: any;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users = data
    );
    this.data.goal.subscribe(res => this.gols = res);
  }

  onSubmit(form) {
    console.log(form.value);
    console.log(form)
  }
}
