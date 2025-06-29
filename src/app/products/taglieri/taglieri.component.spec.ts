import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaglieriComponent } from './taglieri.component';

describe('TaglieriComponent', () => {
  let component: TaglieriComponent;
  let fixture: ComponentFixture<TaglieriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaglieriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaglieriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
