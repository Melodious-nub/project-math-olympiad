import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeOlympiadRegistrationComponent } from './tree-olympiad-registration.component';

describe('TreeOlympiadRegistrationComponent', () => {
  let component: TreeOlympiadRegistrationComponent;
  let fixture: ComponentFixture<TreeOlympiadRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeOlympiadRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeOlympiadRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
