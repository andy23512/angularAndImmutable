import { Component, OnInit } from '@angular/core';
import { List } from 'immutable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'arraytest';
  timer;
  time = new Date();
  array;

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.time = new Date();
    }, 1000);
    this.array = List(['item1', 'item2', 'item3', 'item4', 'item5']).groupBy(
      () => {
        return;
      }
    );
  }
}
