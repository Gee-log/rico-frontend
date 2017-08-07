import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortHistoryComponent } from './port-history.component';

describe('PortHistoryComponent', () => {
  let component: PortHistoryComponent;
  let fixture: ComponentFixture<PortHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
