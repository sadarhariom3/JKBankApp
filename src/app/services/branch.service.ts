import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IBranch } from '../models/IBranch';
import { IDetail } from '../models/IDetail';

@Injectable({
  providedIn: 'root',
})
export class BranchService {
  private serverUrl: string = `http://localhost:5000`; //json-server URL

  constructor(private httpClient: HttpClient) {}

  //GET All Contact
  public getAllContacts(): Observable<IBranch[]> {
    let dataURL: string = `${this.serverUrl}/branch`;
    return this.httpClient
      .get<IBranch[]>(dataURL)
      .pipe(catchError(this.handleError));
  }

  //GET Single Contact
  public getContact(branchId: string): Observable<IBranch> {
    let dataURL: string = `${this.serverUrl}/branch/${branchId}`;
    return this.httpClient
      .get<IBranch>(dataURL)
      .pipe(catchError(this.handleError));
  }

  //Create a Contact
  public createContact(branch: IBranch): Observable<IBranch> {
    let dataURL: string = `${this.serverUrl}/branch`;
    return this.httpClient
      .post<IBranch>(dataURL, branch)
      .pipe(catchError(this.handleError));
  }

  //Update a cONTACT
  public updateContact(branch: IBranch, branchId: string): Observable<IBranch> {
    let dataURL: string = `${this.serverUrl}/branch/${branchId}`;
    return this.httpClient
      .post<IBranch>(dataURL, branch)
      .pipe(catchError(this.handleError));
  }

  //Delete a Contact
  public deleteContact(branchId: string): Observable<{}> {
    let dataURL: string = `${this.serverUrl}/branch/${branchId}`;
    return this.httpClient
      .delete<{}>(dataURL)
      .pipe(catchError(this.handleError));
  }

  //get ALL Groups
  public getAllGroups(): Observable<IDetail[]> {
    let dataURL: string = `${this.serverUrl}/detail`;
    return this.httpClient
      .get<IDetail[]>(dataURL)
      .pipe(catchError(this.handleError));
  }

  //Get Single Group
  public getGroup(branch: IBranch): Observable<IDetail> {
    let dataURL: string = `${this.serverUrl}/detail/${branch.groupId}`;
    return this.httpClient
      .get<IDetail>(dataURL)
      .pipe(catchError(this.handleError));
  }

  //Error Handling
  public handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      //Client Error
      errorMessage = `Error : ${error.error.message}`;
    } else {
      //server Error
      errorMessage = `Status : ${error.status} \n Message: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
