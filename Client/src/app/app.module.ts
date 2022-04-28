import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilesViewComponent } from './components/files-view/files-view.component';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { FilesViewModule } from './components/files-view/files-view.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FilesViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
