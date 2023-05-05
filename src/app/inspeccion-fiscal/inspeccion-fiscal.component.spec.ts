import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspeccionFiscalComponent } from './inspeccion-fiscal.component';

describe('InspeccionFiscalComponent', () => {
  let component: InspeccionFiscalComponent;
  let fixture: ComponentFixture<InspeccionFiscalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspeccionFiscalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspeccionFiscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
