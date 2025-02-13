import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEmployeeComponent } from './manage-employee.component';
import { FormsModule } from '@angular/forms';

describe('ManageEmployeeComponent', () => {
  let component: ManageEmployeeComponent;
  let fixture: ComponentFixture<ManageEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageEmployeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
