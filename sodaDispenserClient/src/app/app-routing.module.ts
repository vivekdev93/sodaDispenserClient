import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DispenseSodaComponent} from './dispense-soda/dispense-soda.component';
import {InventoryComponent} from './inventory/inventory.component';
import {TransactionsComponent} from './transactions/transactions.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path: 'soda', component: DispenseSodaComponent},
  {path: 'inventory', component: InventoryComponent},
  {path: 'transactions', component: TransactionsComponent},
  {path: '', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
