import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenClausuraComponent } from './orden-clausura.component';

describe('OrdenClausuraComponent', () => {
  let component: OrdenClausuraComponent;
  let fixture: ComponentFixture<OrdenClausuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenClausuraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenClausuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
