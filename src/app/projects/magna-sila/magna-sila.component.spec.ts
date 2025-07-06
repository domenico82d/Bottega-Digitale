import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnaSilaComponent } from './magna-sila.component';

describe('MagnaSilaComponent', () => {
  let component: MagnaSilaComponent;
  let fixture: ComponentFixture<MagnaSilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagnaSilaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagnaSilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
