import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncisioniNarrantiComponent } from './incisioni-narranti.component';

describe('IncisioniNarrantiComponent', () => {
  let component: IncisioniNarrantiComponent;
  let fixture: ComponentFixture<IncisioniNarrantiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncisioniNarrantiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncisioniNarrantiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
