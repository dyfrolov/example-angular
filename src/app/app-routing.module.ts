import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { UncleComponent } from './uncle/uncle.component';

const routes: Routes = [
  { path: 'parent', component: AppComponent, pathMatch:'full'},
  { path: 'uncle/:id', component: UncleComponent, pathMatch:'full'},
  { path: 'uncle', component: UncleComponent, pathMatch:'full'},
  { path: '**', redirectTo: '/parent' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
