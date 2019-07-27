import { Component, OnInit, Input } from '@angular/core';
// import { User } from '../../user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  // @Input() user: User; 
  @Input() user; 

  constructor() {}
  // constructor(public modals: NgbActiveModal) {}

  ngOnInit() {
  }

  onSelect(user) {
    console.log("user")
    console.log(user)
  }
}
