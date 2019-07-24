import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  private goals = new BehaviorSubject(["first", "Last"])
  goal = this.goals.asObservable();

  listOfTexts: any;
  
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  changeGoal(item) {
    this.goals.next(item);
  }
}