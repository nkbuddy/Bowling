import { Injectable } from '@angular/core';
import { FrameView } from './FrameView';
import { Frame } from '../Frame';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class FrameAdapterService {

  constructor() { }

  public toFrameList(jsonResponse: any): FrameView[] {
    if (isNullOrUndefined(jsonResponse)) {
      return [];
    }
    return jsonResponse.map((jsonFrame: any) => this.toFrame(jsonFrame));
  }

  private toFrame(jsonResponse: any): FrameView {
    return new FrameView(
      jsonResponse.index,
      jsonResponse.input,
      jsonResponse.baseScore,
      jsonResponse.bonusScore
    );
  }

  public toFramePayload(f: Frame): any {
    if (f) {
      return {
        index: f.index,
        input: f.input
      };
    }
  }
}
