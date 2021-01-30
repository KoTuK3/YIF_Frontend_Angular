import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversitiesComponent } from './universities/universities.component';

const routes: Routes = [
  { path: '', redirectTo: '/universities', pathMatch: 'full' },
  { path: 'universities', component: UniversitiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
