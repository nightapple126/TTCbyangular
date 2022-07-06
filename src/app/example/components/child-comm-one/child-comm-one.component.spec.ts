import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCommOneComponent } from './child-comm-one.component';

describe('ChildCommOneComponent', () => {
  let component: ChildCommOneComponent;
  let fixture: ComponentFixture<ChildCommOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildCommOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildCommOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
