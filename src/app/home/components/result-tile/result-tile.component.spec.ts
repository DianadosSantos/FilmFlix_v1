import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultTileComponent } from './result-tile.component';

describe('ResultTileComponent', () => {
  let component: ResultTileComponent;
  let fixture: ComponentFixture<ResultTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
