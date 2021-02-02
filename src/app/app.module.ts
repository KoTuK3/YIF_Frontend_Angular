import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UniversityCardComponent } from './university-card/university-card.component';
import { UniversityFilterComponent } from './university-filter/university-filter.component';
import { UniversitiesComponent } from './universities/universities.component';
import { HeaderComponent } from './header/header.component';
import { UniversityPageComponent } from './university-page/university-page.component';
import { UniversityMapComponent } from './university-map/university-map.component';
import { SchoolListComponent } from './school-list/school-list.component';
import { SchoolCardComponent } from './school-card/school-card.component';
import { SchoolFilter } from './shared/school-filter.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UniversityCardComponent,
    UniversityFilterComponent,
    UniversitiesComponent,
    HeaderComponent,
    UniversityPageComponent,
    UniversityMapComponent,
    SchoolListComponent,
    SchoolCardComponent,
    SchoolFilter,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
