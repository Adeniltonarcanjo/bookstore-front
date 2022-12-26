import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatListModule} from '@angular/material/list'; 
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './components/views/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { CategoryReadComponent } from './components/views/category/category-read/category-read.component';
import {MatTableModule} from '@angular/material/table'; 
import {MatButtonModule} from '@angular/material/button';
import { CategoryCreatComponent } from './components/views/category/category-create/category-create.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CategoryDeleteComponent } from './components/views/category/category-delete/category-delete.component';
import { CategoryUpdateComponent } from './components/views/category/category-update/category-update.component';
import { BookReadAllComponent } from './components/views/book/book-read-all/book-read-all.component'; 



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CategoryReadComponent,
    CategoryCreatComponent,
    CategoryDeleteComponent,
    CategoryUpdateComponent,
    BookReadAllComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
