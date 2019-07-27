import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  input_btn_text = "Click Here";
  goalText;
  textCount;
  textList = [];
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.goal.subscribe(res => this.textList = res)
    this.textCount = this.textList.length;
  }

  clickSubmit() {
    if (!this.goalText) return;
    this.textList.push(this.goalText);
    this.goalText = "";
    this.textCount = this.textList.length;
    this.data.changeGoal(this.textList);
  }
}
