import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamWinsComponent } from './team-wins.component';

describe('TeamWinsComponent', () => {
  let component: TeamWinsComponent;
  let fixture: ComponentFixture<TeamWinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamWinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamWinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
