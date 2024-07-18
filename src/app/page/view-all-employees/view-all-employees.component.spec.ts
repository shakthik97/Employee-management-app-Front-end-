import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllEmployeesComponent } from './view-all-employees.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

describe('ViewAllEmployeesComponent', () => {
  let component: ViewAllEmployeesComponent;
  let fixture: ComponentFixture<ViewAllEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAllEmployeesComponent, CommonModule, HttpClientModule, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
