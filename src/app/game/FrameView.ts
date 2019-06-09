export class FrameView {
  index: number;
  input: string;
  baseScore: number;
  bonusScore: number;
  currentFrameScore: number;

  constructor(num, input, baseScore, bonusScore?) {
    this.index = num;
    this.input = input;
    this.baseScore = baseScore;
    this.bonusScore = bonusScore;
    this.currentFrameScore = baseScore + bonusScore;
  }
}
