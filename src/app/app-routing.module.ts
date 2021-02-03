import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversitiesComponent } from './universities/universities.component';
import { UniversityPageComponent } from './university-page/university-page.component';
import { SchoolListComponent } from './school-list/school-list.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: '', component: HeaderComponent, children: [
      //{ path: '', redirectTo: '/universities', pathMatch: 'full' },
      { path: 'universities', component: UniversitiesComponent },
      { path: 'university/:id', component: UniversityPageComponent },
      { path: 'schools', component: SchoolListComponent },
      { path: 'user', component: GraduatePageComponent },
      { path: 'user/edit', component: UserProfileComponent },
    ]
  },
  {
    path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
