import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortConnectionComponent } from './port-connection.component';

describe('PortConnectionComponent', () => {
  let component: PortConnectionComponent;
  let fixture: ComponentFixture<PortConnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortConnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
