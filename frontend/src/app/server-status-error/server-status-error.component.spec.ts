import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerStatusErrorComponent } from './server-status-error.component';

describe('ServerStatusErrorComponent', () => {
  let component: ServerStatusErrorComponent;
  let fixture: ComponentFixture<ServerStatusErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerStatusErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerStatusErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
