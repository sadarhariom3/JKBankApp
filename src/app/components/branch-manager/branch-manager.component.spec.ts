import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchManagerComponent } from './branch-manager.component';

describe('BranchManagerComponent', () => {
  let component: BranchManagerComponent;
  let fixture: ComponentFixture<BranchManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
