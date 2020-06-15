import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatSliderModule} from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import {MainNavComponent } from './main-nav/main-nav.component';



import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { CategoryService } from './shared/category.service';
import {ProductService} from './shared/product.service';
import { VwuserService} from './shared/vwuser.service';
import { OrderService } from './shared/order.service';
import { BrandService } from './shared/brand.service';
// import { AuthGuard } from './auth/auth.guard';
// import { AuthInterceptor } from './auth/auth.interceptor';
import { UserService } from './shared/user.service';
import { appRoutes } from './routes';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AddcategoryComponent } from './main-nav/addcategory/addcategory.component';
import { ViewcategoryComponent } from './main-nav/viewcategory/viewcategory.component';
import { EditcategoryComponent } from './main-nav/updatecategory/editcategory.component';
import { AddproductComponent } from './main-nav/addproduct/addproduct.component';
import { ViewproductComponent } from './main-nav/viewproduct/viewproduct.component';
import { EditproductComponent } from './main-nav/updateproduct/editproduct.component';
import { ReguserComponent } from './main-nav/viewreguser/reguser.component';
import { AddbrandComponent } from './main-nav/addbrand/addbrand.component';
import { ViewbrandComponent } from './main-nav/viewbrand/viewbrand.component';
import { EditbrandComponent } from './main-nav/updatebrand/editbrand.component';
// import { BookingComponent } from './main-nav/viewbooking/booking.component';







@NgModule({
  declarations: [
    AppComponent,
    // UserProfileComponent,
    MainNavComponent,
    UserComponent,
    SignUpComponent,
    SignInComponent,
    AddcategoryComponent,
    ViewcategoryComponent,
    EditcategoryComponent,
    AddbrandComponent,
    ViewbrandComponent,
    EditbrandComponent,
    AddproductComponent,
    ViewproductComponent,
    EditproductComponent,
    //FileSelectDirective,
    ReguserComponent
    // BookingComponent
       
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // MatButtonModule,
    // LayoutModule,
    // MatToolbarModule,
    // MatSidenavModule,
    // MatIconModule,
    // MatListModule,
    // MatMenuModule,
    FormsModule,
      // MatFormFieldModule,
      // MatInputModule,
      // FlexLayoutModule,
    // MatTableDataSource,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
    // MatSliderModule
  ],
  exports: [
    // MatFormFieldModule,
    // MatInputModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }, AuthGuard, UserService , CategoryService, ProductService, BrandService, VwuserService, OrderService],
    bootstrap: [AppComponent]
  })
export class AppModule { }
