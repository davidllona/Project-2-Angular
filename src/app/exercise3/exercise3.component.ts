import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.component.html',
  styleUrls: ['./exercise3.component.css']
})
export class Exercise3Component implements OnInit {
  transactions: any[] = [];
  transactionDetails: any;
  currentDate: Date = new Date();
  sortBy: string = 'id';
  sortAscending: boolean = true; 

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get('../assets/data/data/transactions.json').subscribe((data: any) => {
      this.transactions = data;
    });
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }

  getTransactionDetails(id: string): void {
    this.http.get(`assets/data/data/id${id}.json`).subscribe((data: any) => {
      this.transactionDetails = data;
    });
  }

  viewDetails(id: string): void {
    this.router.navigate(['/exercise3/details', id]);
  }

  sortTransactions(): any[] {
    if (this.sortBy === 'id') {
      return this.sortByField(this.transactions, 'id');
    } else if (this.sortBy === 'label') {
      return this.sortByField(this.transactions, 'label');
    } else if (this.sortBy === 'amount') {
      return this.sortByAmount(this.transactions);
    } else {
      return this.transactions;
    }
  }

  sortByField(array: any[], field: string): any[] {
    if (this.sortAscending) {
      return array.sort((a, b) => a[field].localeCompare(b[field]));
    } else {
      return array.sort((a, b) => b[field].localeCompare(a[field]));
    }
  }

  sortByAmount(array: any[]): any[] {
    if (this.sortAscending) {
      return array.sort((a, b) => a.amount - b.amount);
    } else {
      return array.sort((a, b) => b.amount - a.amount);
    }
  }

  changeSortBy(criteria: string): void {
    if (this.sortBy === criteria) {
      this.sortAscending = !this.sortAscending;
    } else {
      this.sortAscending = true; 
    }
    this.sortBy = criteria;
    this.sortTransactions();
  }
}
