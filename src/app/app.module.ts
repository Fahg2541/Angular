import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './TCRU/Toolbar/header/header.component';
import { ToggleSidebarComponent } from './TCRU/Toolbar/toggle-sidebar/toggle-sidebar.component';
import { SidebarComponent } from './TCRU/Toolbar/sidebar/sidebar.component';
import { CustomersComponent } from './TCRU/customers/customers.component';
import { ReportComponent } from './TCRU/report/report.component';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

const appRoutes: Routes = [
  {
    path: '', 
    redirectTo: '/Report', 
    pathMatch: 'full'
  },
  {
    path: 'Report',
    component: ReportComponent,
  },
  { 
    path: 'Customers', 
    component: CustomersComponent 
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ToggleSidebarComponent,
    CustomersComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatBadgeModule,
    MatDividerModule,
    MatCardModule,
    MatChipsModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    ToggleSidebarComponent,
    SidebarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
