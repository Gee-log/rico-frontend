import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingModeComponent } from './testing-mode.component';

describe('TestingModeComponent', () => {
  let component: TestingModeComponent;
  let fixture: ComponentFixture<TestingModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
