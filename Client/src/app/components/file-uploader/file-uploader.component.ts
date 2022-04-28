import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FileManagerService } from 'src/app/services/file-manager.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {

  constructor(private modalService: NgbModal,private _fileManagerService: FileManagerService) { }
  selectedFile: any;
  fileUrl: any;
  ngOnInit(): void {
  }
  processFile(fileInput: any) {

    this.selectedFile = fileInput.files[0];
    debugger;
    //validate the selected file
    //size
    if ((this.selectedFile.size / 1024) > environment.maxFileSize) {
      alert(`Select a file less than ${environment.maxFileSize} KB`);
      this.selectedFile = null;
      return
    }
  
    //type
    if ( environment.allowedFileTypes.indexOf(this.selectedFile.type)<0) {
      alert(`"${this.selectedFile.type}" File type is not supported!`);
      this.selectedFile = null;
      return
    }
    var reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = (_event) => {
      this.fileUrl = reader.result;

    }

  }
  submit() {
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    this._fileManagerService.add(formData).subscribe(
      {
        next:(data)=>{
          this.modalService.dismissAll();
          this._fileManagerService.getAll().subscribe();
          alert('Successful');

        },
        error:(err)=>{debugger; alert(err)},
        
      }
    );
  }
}
