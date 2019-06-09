import { Component, OnInit } from '@angular/core';
import { GameService } from './game/game.service';
import { Observable } from 'rxjs';
import { Frame } from './Frame';
import { FrameView } from './game/FrameView';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public scoreInLabel: string;
  public currentFrameIndex: number;
  public frames: Observable<FrameView[]>;
  public title = 'BowlingProject';
  public scoreOptions: number[];
  public rollScore: number;
  public labelDisabled: boolean;
  public allButtonDisabled: boolean;

  constructor(private gameService: GameService) {
  }


  ngOnInit() {
    this.scoreInLabel = '';
    this.currentFrameIndex = 0;
    this.scoreOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.labelDisabled = false;
    this.allButtonDisabled = false;
  }

  public initialFrameIndex(): void {
    this.currentFrameIndex = 0;
    this.scoreInLabel = '';
    this.rollScore = 0;
    this.refreshButtons(this.rollScore);
    this.gameService.resetGame();
  }

  public addNewFrame(): void {
    if (this.currentFrameIndex < 10) {
      this.frames = this.gameService.addFrame(new Frame(this.currentFrameIndex, this.scoreInLabel));
      this.currentFrameIndex += 1;
      this.scoreInLabel = '';
      this.rollScore = 0;
      this.disableAllButtons(false);
    } else {
      alert('The frame index can\'t greater than 9 !');
    }
  }

  public setRollScore(rollScore: number): void {
    this.scoreInLabel += this.rollScoreConverter(rollScore);
    if (rollScore === 10 || this.scoreInLabel.length > 1 || (this.rollScore + rollScore) === 10) {
      this.disableAllButtons(true);
    } else {
      this.refreshButtons(rollScore);
    }
    this.rollScore = rollScore;
  }

  private disableAllButtons(disable: boolean): void {
    this.labelDisabled = disable;
    this.allButtonDisabled = disable;
  }

  private rollScoreConverter(rollScore: number): string {
    if (rollScore === 10) {
      return 'X';
    } else if (rollScore === 0) {
      return '-';
    } else if ((rollScore + this.rollScore) === 10) {
      return '/';
    } else {
      return rollScore.toString();
    }
  }

  private refreshButtons(rollScore: number) {
    for (let i = 0; i < this.scoreOptions.length; i++) {
      if ((rollScore + i) > 10) {
        const element = document.getElementById('btn' + i) as HTMLButtonElement;
        element.disabled = true;
      } else {
        const element = document.getElementById('btn' + i) as HTMLButtonElement;
        element.disabled = false;
      }
    }
  }
}



