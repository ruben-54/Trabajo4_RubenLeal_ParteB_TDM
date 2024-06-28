import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValorM2CPage } from './valor-m2-c.page';

describe('ValorM2CPage', () => {
  let component: ValorM2CPage;
  let fixture: ComponentFixture<ValorM2CPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ValorM2CPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
