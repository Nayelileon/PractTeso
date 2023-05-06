import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmaIFComponent } from './firma-if.component';

describe('FirmaIFComponent', () => {
  let component: FirmaIFComponent;
  let fixture: ComponentFixture<FirmaIFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirmaIFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirmaIFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
