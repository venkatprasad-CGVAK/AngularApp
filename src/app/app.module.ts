import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { UsersComponent } from './users/users.component';
import { SingleProductComponent } from './products/single-product/single-product.component';
import { SingleUserComponent } from './users/single-user/single-user.component';
import { CounterBtnComponent } from './products/counter/counter-btn/counter-btn.component';
import { CounterComponent } from './products/counter/counter.component';
import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './products/add-product/add-product.component';
import { AddUserComponent } from './users/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
      ProductsComponent,
      HomeComponent,
      CustomersComponent,
      NavBarComponent,
      UsersComponent,
      SingleProductComponent,
      SingleUserComponent,
      CounterBtnComponent,
      CounterComponent,
      AddProductComponent,
      AddUserComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
