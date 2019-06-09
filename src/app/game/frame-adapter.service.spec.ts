import { TestBed } from '@angular/core/testing';

import { FrameAdapterService } from './frame-adapter.service';

describe('FrameAdapterService', () => {
  let component: FrameAdapterService;
  const json: any = [
    {
      index: 0,
      input: '23',
      baseScore: 5,
      bonusScore: -1,
      totalScore: -1,
      firstRoll: 2,
      secondRoll: 3
    }
  ];

  beforeEach(() => {
    component = new FrameAdapterService();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('toFrame', () => {
    it('should parse payload to frames ', () => {
        const actual = component.toFrameList(json);

        expect(actual.length).toBe(1);
        expect(actual[0].index).toBe(json[0].index);
        expect(actual[0].input).toBe(json[0].input);
        expect(actual[0].baseScore).toBe(json[0].baseScore);
        expect(actual[0].bonusScore).toBe(json[0].bonusScore);
        expect(actual[0].currentFrameScore).toBe(json[0].total);
    });

    it('should parse payload as empty when the payload is empty ', () => {
      const actual = component.toFrameList(json);

      expect(actual.length).toBe(0);
    });
  });


});
