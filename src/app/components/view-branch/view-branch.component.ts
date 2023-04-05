import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IBranch } from 'src/app/models/IBranch';
import { IDetail } from 'src/app/models/IDetail';
import { BranchService } from 'src/app/services/branch.service';

@Component({
  selector: 'app-view-branch',
  templateUrl: './view-branch.component.html',
  styleUrls: ['./view-branch.component.css'],
})
export class ViewBranchComponent implements OnInit {
  public branchId: string | null = null;
  public branch: IBranch = {} as IBranch;
  public errorMessage: string | null = null;
  public detail: IDetail = {} as IDetail;

  constructor(
    private activatedRoute: ActivatedRoute,
    private branchService: BranchService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.branchId = param.get('branchId');
    });
    if (this.branchId) {
      this.branchService.getContact(this.branchId).subscribe(
        (data) => {
          this.branch = data;
          this.branchService.getGroup(data).subscribe((data) => {
            this.detail = data;
          });
        },
        (error) => {
          this.errorMessage = error;
        }
      );
    }
  }

  public isNotEmpty() {
    return Object.keys(this.branch).length > 0;
  }
}
