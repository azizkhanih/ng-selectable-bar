import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSelectableBarComponent } from './ng-selectable-bar.component';

describe('NgSelectableBarComponent', () => {
  let component: NgSelectableBarComponent;
  let fixture: ComponentFixture<NgSelectableBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSelectableBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSelectableBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
