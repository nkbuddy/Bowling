import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  score: string;
  public frames: Frame[];
  title = 'BowlingProject';

  ngOnInit() {
    this.score = '';
  }
}

export interface Frame {
  num: number;
  input: string[];
  currentScore: number;
  totalScore: number;
}
