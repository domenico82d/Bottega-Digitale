import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlCieloESemprePiuBluComponent } from './il-cielo-e-sempre-piu-blu.component';

describe('IlCieloESemprePiuBluComponent', () => {
  let component: IlCieloESemprePiuBluComponent;
  let fixture: ComponentFixture<IlCieloESemprePiuBluComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IlCieloESemprePiuBluComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IlCieloESemprePiuBluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
