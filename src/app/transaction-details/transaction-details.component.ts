import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent implements OnInit {
  transactionDetails: any;
  currentDate: Date = new Date();
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      const jsonFile = `assets/data/data/${id}.json`; 
      console.log('JSON File:', jsonFile);

      this.http.get(jsonFile).subscribe((data: any) => {
        this.transactionDetails = data;
        console.log('Transaction Details:', this.transactionDetails);
      });
    });
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }
}
