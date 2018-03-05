import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortConnectionMobileComponent } from './port-connection-mobile.component';

describe('PortConnectionMobileComponent', () => {
  let component: PortConnectionMobileComponent;
  let fixture: ComponentFixture<PortConnectionMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortConnectionMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortConnectionMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
