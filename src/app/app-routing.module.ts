import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversitiesComponent } from './universities/universities.component';
import { UniversityPageComponent } from './university-page/university-page.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/universities', pathMatch: 'full' },
  { path: 'universities', component: UniversitiesComponent },
  { path: 'university/:id', component: UniversityPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
