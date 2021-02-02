import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversitiesComponent } from './universities/universities.component';
import { UniversityPageComponent } from './university-page/university-page.component';
import { GraduatePageComponent } from './user/graduate-page/graduate-page.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/universities', pathMatch: 'full' },
  { path: 'universities', component: UniversitiesComponent },
  { path: 'university/:id', component: UniversityPageComponent },
  { path: 'user', component: GraduatePageComponent },
  { path: 'user/edit', component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
