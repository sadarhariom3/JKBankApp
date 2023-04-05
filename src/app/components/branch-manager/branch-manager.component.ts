import { Component, OnInit } from '@angular/core';
import { IBranch } from 'src/app/models/IBranch';
import { BranchService } from 'src/app/services/branch.service';

@Component({
  selector: 'app-branch-manager',
  templateUrl: './branch-manager.component.html',
  styleUrls: ['./branch-manager.component.css'],
})
export class BranchManagerComponent implements OnInit {
  public branch: IBranch[] = [];
  public errorMessage: string | null = null;

  constructor(private branchService: BranchService) {}

  ngOnInit(): void {
    this.getAllContactFromServer();
  }

  public getAllContactFromServer() {
    this.branchService.getAllContacts().subscribe(
      (data) => {
        this.branch = data;
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

  public clickDeleteContact(branchId: string | undefined) {
    if (branchId) {
      this.branchService.deleteContact(branchId).subscribe(
        (data) => {
          this.getAllContactFromServer();
        },
        (error) => {
          this.errorMessage = error;
        }
      );
    }
  }
}
