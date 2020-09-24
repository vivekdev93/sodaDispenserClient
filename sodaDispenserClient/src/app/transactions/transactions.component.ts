import {Component, OnInit} from '@angular/core';
import {DispenserService} from '../dispenser.service';
import {Transactions} from '../transactions';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  public transactions: Transactions[];

  constructor(private dispenserService: DispenserService) {
  }


  ngOnInit(): void {
    console.log('sample');
    this.dispenserService.getTransactions().subscribe(data => {
      this.transactions = data;
    });
  }
}
