import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { EditorcontainerComponent } from './editorcontainer/editorcontainer.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SearchBoxComponent } from './dashboard/search-box/search-box.component';
import { FileListComponent } from './dashboard/file-list/file-list.component';
import { FileListItemComponent } from './dashboard/file-list/file-list-item/file-list-item.component';
import { ChooseFieldComponent } from './dashboard/choose-field/choose-field.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    EditorcontainerComponent,
    NavMenuComponent,
    SearchBoxComponent,
    FileListComponent,
    FileListItemComponent,
    ChooseFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
