import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglecontainerComponent } from './togglecontainer.component';

describe('TogglecontainerComponent', () => {
  let component: TogglecontainerComponent;
  let fixture: ComponentFixture<TogglecontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TogglecontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TogglecontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
