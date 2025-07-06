import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BronziDiCartaComponent } from './bronzi-di-carta.component';

describe('BronziDiCartaComponent', () => {
  let component: BronziDiCartaComponent;
  let fixture: ComponentFixture<BronziDiCartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BronziDiCartaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BronziDiCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
