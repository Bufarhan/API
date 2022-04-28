import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesViewComponent } from './files-view.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileUploaderComponent } from '../file-uploader/file-uploader.component';


const routes = [
    {
        path: '',
        component: FilesViewComponent,

    }
];


@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        NgbModule
    ]
    ,
    declarations: [
        FilesViewComponent,
        FileUploaderComponent

    ]
})
export class FilesViewModule { }
