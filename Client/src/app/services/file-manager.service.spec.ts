import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FileResponse } from '../models/FileResponse';
import { FileManagerService } from './file-manager.service';


describe('FileManagerService', () => {
  let service: FileManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientModule],providers: [FileManagerService]
    });
    service = TestBed.inject(FileManagerService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

 
  it('should retrieve array of FileResponse from the API', () => {
      let dummyFiles:FileResponse[]=[{
        id:'123',
        title:'file1',
        size:10,
        type:'image',
        createdDate:new Date()
    },
    {
        id:'456',
        title:'file2',
        size:10,
        type:'image',
        createdDate:new Date()
    },
  ]
    service.getAll().subscribe(
        data=>{ 
     expect(data.length).toBe(2);   
     expect(data).toEqual(dummyFiles);   
        }
     );
  });
});
