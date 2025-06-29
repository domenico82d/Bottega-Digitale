import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RingraziamentiComponent } from './rigraziamenti.component';


describe('RingraziamentiComponent', () => {
  let component: RingraziamentiComponent;
  let fixture: ComponentFixture<RingraziamentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RingraziamentiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RingraziamentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
