import {Component, OnInit} from '@angular/core';
import {DispenserService} from '../dispenser.service';
import {SodaType} from '../soda-type';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DispenseRequest} from '../dispense-request';
import {decoratorArgument} from 'codelyzer/util/astQuery';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-dispense-soda',
  templateUrl: './dispense-soda.component.html',
  styleUrls: ['./dispense-soda.component.css']
})
export class DispenseSodaComponent implements OnInit {
  types: SodaType[];
  form: FormGroup;
  response: any;
  error: any;

  constructor(private dispenserService: DispenserService, public fb: FormBuilder) {
    this.form = this.fb.group({
      sodaType: ['Select Soda'],
      numberOfQuarters: ['']
    });
  }

  ngOnInit(): void {
    this.dispenserService.findAllTypes().subscribe(data => {
      this.types = data;
    });
  }

  dispenseSoda(value: any) {
    this.error = null;
    this.response = null;
    const body = 'sodaType=' + value.sodaType + '&numberOfQuarters=' + value.numberOfQuarters;
    this.dispenserService.disepenseSoda(body).subscribe(
      (response) => this.response = response,
      (error: HttpErrorResponse) => this.error = error.error);
  }

}
