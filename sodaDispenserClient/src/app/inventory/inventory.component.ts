import { Component, OnInit } from '@angular/core';
import {DispenserService} from '../dispenser.service';
import {Item} from '../item';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  public map: Map<string, number>;

  constructor(private dispenserService: DispenserService) {
  }


  ngOnInit(): void {
    this.dispenserService.getInventory().subscribe(data => {
      this.map = data;
    });
  }

}
