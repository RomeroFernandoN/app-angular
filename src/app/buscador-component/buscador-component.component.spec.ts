import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorComponentComponent } from './buscador-component.component';

describe('BuscadorComponentComponent', () => {
  let component: BuscadorComponentComponent;
  let fixture: ComponentFixture<BuscadorComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscadorComponentComponent]
    });
    fixture = TestBed.createComponent(BuscadorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
