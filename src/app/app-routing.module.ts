import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; // Aggiungo modulo di routing

// ----------- COMPONENTI -----------
import { DashboardComponent } from './dashboard/dashboard.component'; // Aggiungo component dashboard
import { UnitComponent } from './unit/unit.component';

// ------------ ROUTES --------------
export const routes: Routes =  [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'courses/:id/units/:id', component: UnitComponent},
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) // Rendo visibile il router a tutta l'app
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
