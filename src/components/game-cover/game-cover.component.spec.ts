import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCoverComponent } from './game-cover.component';

describe('GameCoverComponent', () => {
  let component: GameCoverComponent;
  let fixture: ComponentFixture<GameCoverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameCoverComponent]
    });
    fixture = TestBed.createComponent(GameCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
