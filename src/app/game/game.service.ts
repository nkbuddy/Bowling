import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FrameAdapterService } from './frame-adapter.service';
import { map as rxMap } from 'rxjs/operators';
import { Frame } from '../Frame';
import { FrameView } from './FrameView';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient, private frameAdapterService: FrameAdapterService) { }

  // tslint:disable-next-line:ban-types
  public addFrame(newFrame: Frame): Observable<FrameView[]> {
    const payload = this.frameAdapterService.toFramePayload(newFrame);
    console.log(payload);
    return this.http.post('http://localhost:4567/frame', payload)
      .pipe(rxMap(jsonResponse => {
        return this.frameAdapterService.toFrameList(jsonResponse);
      })) as Observable<FrameView[]>;
  }

  // tslint:disable-next-line:ban-types
  public resetGame(): Observable<Object> {
    return this.http.delete('http://localhost:4567/game');
  }
}
