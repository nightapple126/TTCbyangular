import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCommTwoComponent } from './child-comm-two.component';

describe('ChildCommTwoComponent', () => {
  let component: ChildCommTwoComponent;
  let fixture: ComponentFixture<ChildCommTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildCommTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildCommTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
