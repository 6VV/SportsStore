import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AdminComponent } from './admin.component';

const routing = RouterModule.forChild([
  { path: 'auth', component: AuthComponent },
  { path: 'main', component: AdminComponent },
  { path: '**', redirectTo: 'auth' }
]);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [AuthComponent, AdminComponent]
})
export class AdminModule { }