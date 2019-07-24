import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  months = ["January", "Feburary", "March", "April", "May", 
            "June", "July", "August", "September",
            "October", "November", "December"];
  input_btn_text = "Click Here";
  goalText;
  textCount;
  textList = [];
  constructor() { }

  ngOnInit() {
    this.textCount = this.textList.length;
  }

  clickSubmit() {
    this.textList.push(this.goalText);
    this.goalText = "";
    this.textCount = this.textList.length;
  }
}
