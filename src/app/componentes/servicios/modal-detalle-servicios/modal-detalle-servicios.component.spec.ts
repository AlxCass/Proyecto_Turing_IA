import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetalleServiciosComponent } from './modal-detalle-servicios.component';

describe('ModalDetalleServiciosComponent', () => {
  let component: ModalDetalleServiciosComponent;
  let fixture: ComponentFixture<ModalDetalleServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDetalleServiciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDetalleServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
