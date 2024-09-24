import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeyalComponent } from './deyal.component';

describe('DeyalComponent', () => {
  let component: DeyalComponent;
  let fixture: ComponentFixture<DeyalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeyalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeyalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
