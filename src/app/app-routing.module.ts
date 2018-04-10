import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; // Aggiungo modulo di routing

// ----------- COMPONENTI -----------
import { DashboardComponent } from './dashboard/dashboard.component'; // Aggiungo component dashboard
import { LoginFormComponent } from './login-form/login-form.component';
import { UnitComponent } from './unit/unit.component';

// ------------ ROUTES --------------
const routes: Routes =  [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent  },
  { path: 'courses/:id/units/:id', component: UnitComponent},
  { path: 'dashboard', component: DashboardComponent  }
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
