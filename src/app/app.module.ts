import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UniversityCardComponent } from './university-card/university-card.component';
import { UniversityFilterComponent } from './university-filter/university-filter.component';
import { UniversitiesComponent } from './universities/universities.component';
import { HeaderComponent } from './header/header.component';
import { UniversityPageComponent } from './university-page/university-page.component';
import { UniversityMapComponent } from './university-map/university-map.component';
import { GraduateCardComponent } from './user/graduate-card/graduate-card.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { GraduatePageComponent } from './user/graduate-page/graduate-page.component';
import { SchoolListComponent } from './school-list/school-list.component';
import { SchoolCardComponent } from './school-card/school-card.component';
import { SchoolFilter } from './shared/school-filter.pipe';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterseptor } from './interseptors/auth.interseptor';
import { ModalModule } from './modal';


@NgModule({
  declarations: [
    AppComponent,
    UniversityCardComponent,
    UniversityFilterComponent,
    UniversitiesComponent,
    HeaderComponent,
    UniversityPageComponent,
    UniversityMapComponent,
    GraduateCardComponent,
    UserProfileComponent,
    GraduatePageComponent,
    SchoolListComponent,
    SchoolCardComponent,
    SchoolFilter,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ModalModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, multi: true, useClass: AuthInterseptor }],
  bootstrap: [AppComponent],
})
export class AppModule { }
