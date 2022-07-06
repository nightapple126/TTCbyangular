import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCommComponent } from './parent-comm.component';

describe('ParentCommComponent', () => {
  let component: ParentCommComponent;
  let fixture: ComponentFixture<ParentCommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentCommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
