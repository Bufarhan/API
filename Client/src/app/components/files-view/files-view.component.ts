import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FileResponse } from 'src/app/models/FileResponse';
import { FileManagerService } from 'src/app/services/file-manager.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-files-view',
  templateUrl: './files-view.component.html',
  styleUrls: ['./files-view.component.css']
})
export class FilesViewComponent implements OnInit {
  items:FileResponse[];
  serverPath:string='';
  constructor(private modalService: NgbModal,private fileManagerService:FileManagerService) { 
  this.serverPath=`${environment.apiUrl}`;
  this.fileManagerService.items.subscribe(data=>this.items=data );
}
  ngOnInit(): void {
    this.fileManagerService.getAll().subscribe();
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
}
