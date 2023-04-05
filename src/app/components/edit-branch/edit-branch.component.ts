import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBranch } from 'src/app/models/IBranch';
import { IDetail } from 'src/app/models/IDetail';
import { BranchService } from 'src/app/services/branch.service';

@Component({
  selector: 'app-edit-branch',
  templateUrl: './edit-branch.component.html',
  styleUrls: ['./edit-branch.component.css'],
})
export class EditBranchComponent implements OnInit {
  public branchId: string | null = null;
  public branch: IBranch = {} as IBranch;
  public errorMessage: string | null = null;
  public detail: IDetail[] = [] as IDetail[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private branchService: BranchService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.branchId = param.get('branchId');
    });
    if (this.branchId) {
      this.branchService.getContact(this.branchId).subscribe(
        (data) => {
          this.branch = data;
          this.branchService.getAllGroups().subscribe((data) => {
            this.detail = data;
          });
        },
        (error) => {
          this.errorMessage = error;
        }
      );
    }
  }
  public updateForm() {
    if (this.branchId) {
      this.branchService.updateContact(this.branch, this.branchId).subscribe(
        (data) => {
          this.router.navigate(['/']).then();
        },
        (error) => {
          this.errorMessage = error;
          this.router.navigate([`/branch/edit/${this.branchId}`]).then();
        }
      );
    }
  }
}
