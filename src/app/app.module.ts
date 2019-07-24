import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { LeftNavBarComponent } from './left-nav-bar/left-nav-bar.component';
import { ContentComponent } from './content/content.component';
import { HomeDirective } from './home.directive';
import { CapitalizePipe } from './capitalize.pipe';
import { DetailsComponent } from './details/details.component';

// const appRoutes: Routes = [
//   { path: 'aboutme', component: AboutMeComponent },
//   { path: 'home',      component: HomeComponent },
//   { path: '',
//     redirectTo: '/home',
//     pathMatch: 'full'
//   },
//   { path: '**', component: HomeComponent },

// ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutMeComponent,
    LeftNavBarComponent,
    ContentComponent,
    HomeDirective,
    CapitalizePipe,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // RouterModule.forRoot(
    //   appRoutes,
    //   { enableTracing: true }
    // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  

}
