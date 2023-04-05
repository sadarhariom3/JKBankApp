import { Component } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {

  nameSearch: any;
  temp:any;

   transactions = [
    {
      Name:'ashok',
      transaction_id: 1,
      transaction_date: '3/3/2020',
      balance:42343,
      transaction_amount:3232,
      customer_accountNumber:342342342342
    },
    {
      Name:'farman',
      transaction_id: 2,
      transaction_date: '4/3/2322',
      balance:42343,
      transaction_amount:3232,
      customer_accountNumber:342342342342
    },
    {
      Name:'harish',
      transaction_id: 3,
      transaction_date: '4/3/2023',
      balance:42343,
      transaction_amount:3232,
      customer_accountNumber:342342342342
    },
    {
      Name:'harish',
      transaction_id: 4,
      transaction_date: '6/9/2021',
      balance:42343,
      transaction_amount:3232,
      customer_accountNumber:342342342342
    },
    {
      Name:'sumit',
      transaction_id: 5,
      transaction_date: '6/9/2021',
      balance:42343,
      transaction_amount:3232,
      customer_accountNumber:342342342342
    },
    {
      Name:'rajat',
      transaction_id: 6,
      transaction_date: '6/9/2021',
      balance:42343,
      transaction_amount:3232,
      customer_accountNumber:342342342342
    },
    {
      Name:'purushotam',
      transaction_id: 7,
      transaction_date: '6/9/2021',
      balance:42343,
      transaction_amount:3232,
      customer_accountNumber:342342342342
    },
    {
      Name:'farman',
      transaction_id: 8,
      transaction_date: '6/9/2021',
      balance:42343,
      transaction_amount:3232,
      customer_accountNumber:342342342342
    },
    {
      Name:'prince',
      transaction_id: 9,
      transaction_date: '6/9/2021',
      balance:42343,
      transaction_amount:3232,
      customer_accountNumber:342342342342
    },
    {
      Name:'akhtar',
      transaction_id: 10,
      transaction_date: '6/9/2021',
      balance:42343,
      transaction_amount:3232,
      customer_accountNumber:342342342342
    },
    {
      Name:'abdula',
      transaction_id: 11,
      transaction_date: '6/9/2021',
      balance:42343,
      transaction_amount:3232,
      customer_accountNumber:342342342342
    },

];

onSave(st:string){
  this.nameSearch=(<HTMLInputElement>document.getElementById("1")).value;
  this.nameSearch = st;
}

}
