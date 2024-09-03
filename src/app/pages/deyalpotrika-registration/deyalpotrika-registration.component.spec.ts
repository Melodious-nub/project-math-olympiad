import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeyalpotrikaRegistrationComponent } from './deyalpotrika-registration.component';

describe('DeyalpotrikaRegistrationComponent', () => {
  let component: DeyalpotrikaRegistrationComponent;
  let fixture: ComponentFixture<DeyalpotrikaRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeyalpotrikaRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeyalpotrikaRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
