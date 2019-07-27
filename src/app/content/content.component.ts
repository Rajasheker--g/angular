import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UserComponent } from '../components/user/user.component';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
  users;
  gols;
  submitted = false;
  months = ["January", "Feburary", "March", "April", "May", 
  "June", "July", "August", "September",
  "October", "November", "December"];
  selecteduser;
  constructor(private data: DataService) {
   }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users = data
    );
    this.data.goal.subscribe(res => this.gols = res);
  }

  onSubmit(form) {
    if (typeof this.users === "object") this.users.push({"email": form.value.email, "website": form.value.website, "id": this.users.slice(-1)[0].id + 1, "name": form.value.username});
    // this.submitted = true;
  }
  onSelect(user) {
    this.selecteduser = user;
  }
}
