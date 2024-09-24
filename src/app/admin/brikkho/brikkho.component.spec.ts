import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrikkhoComponent } from './brikkho.component';

describe('BrikkhoComponent', () => {
  let component: BrikkhoComponent;
  let fixture: ComponentFixture<BrikkhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrikkhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrikkhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
