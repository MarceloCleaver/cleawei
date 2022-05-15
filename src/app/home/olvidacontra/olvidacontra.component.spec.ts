import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlvidacontraComponent } from './olvidacontra.component';

describe('OlvidacontraComponent', () => {
  let component: OlvidacontraComponent;
  let fixture: ComponentFixture<OlvidacontraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlvidacontraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OlvidacontraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
