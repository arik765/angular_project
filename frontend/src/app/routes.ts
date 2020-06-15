import { Routes,RouterModule } from '@angular/router';
import { MainNavComponent } from './main-nav/main-nav.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AddcategoryComponent } from './main-nav/addcategory/addcategory.component';
import { ViewcategoryComponent } from './main-nav/viewcategory/viewcategory.component';
import { EditcategoryComponent } from './main-nav/updatecategory/editcategory.component';
import { AddbrandComponent } from './main-nav/addbrand/addbrand.component';
import { ViewbrandComponent } from './main-nav/viewbrand/viewbrand.component';
import { EditbrandComponent } from './main-nav/updatebrand/editbrand.component';
import { AddproductComponent } from './main-nav/addproduct/addproduct.component';
import { ReguserComponent } from './main-nav/viewreguser/reguser.component';
// import { BookingComponent } from './main-nav/viewbooking/booking.component';
import { ViewproductComponent} from './main-nav/viewproduct/viewproduct.component';
import { EditproductComponent } from './main-nav/updateproduct/editproduct.component';
import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'main-nav', component: MainNavComponent, canActivate: [AuthGuard],
        children: [{ path: 'AddCategory', component: AddcategoryComponent  },
        { path: 'ViewCategory', component: ViewcategoryComponent },
        { path: 'EditBrand/:id', component : EditbrandComponent},
        { path: 'AddBrand', component: AddbrandComponent  },
        { path: 'ViewBrand', component: ViewbrandComponent },
        { path: 'EditCategory/:id', component : EditcategoryComponent},
        { path: 'Addproduct', component: AddproductComponent},
        { path: 'Viewproduct', component: ViewproductComponent},
        { path: 'Editproduct/:id', component: EditproductComponent },
        { path: 'reguser', component: ReguserComponent}
        // { path: 'booking' , component: BookingComponent}
    ]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];
