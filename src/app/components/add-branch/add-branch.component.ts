import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBranch } from 'src/app/models/IBranch';
import { IDetail } from 'src/app/models/IDetail';
import { BranchService } from 'src/app/services/branch.service';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css'],
})
export class AddBranchComponent implements OnInit {
  public branch: IBranch = {} as IBranch;
  public errorMessage: string | null = null;
  public detail: IDetail[] = [] as IDetail[];

  constructor(private branchService: BranchService, private router: Router) {}

  ngOnInit(): void {
    this.branchService.getAllGroups().subscribe(
      (data) => {
        this.detail = data;
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

  public createSubmit() {
    this.branchService.createContact(this.branch).subscribe(
      (data) => {
        this.router.navigate(['/']).then();
      },
      (error) => {
        this.errorMessage = error;
        this.router.navigate(['/branch/add']).then();
      }
    );
  }
}
