import { environment } from 'src/environments/environment';
import { FileResponse } from '../models/FileResponse';
import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { BehaviorSubject,   Observable, of, Subscriber } from 'rxjs';
import { map   } from 'rxjs/operators';
const baseUrl = `${environment.apiUrl}FileManager`;

@Injectable({
  providedIn: 'root'
})
export class FileManagerService {
  private itemsSubject: BehaviorSubject<FileResponse[]>;
  public items: Observable<FileResponse[]>;

  constructor(
    private http: HttpClient

  ) { 
    this.itemsSubject = new BehaviorSubject<FileResponse[]>([]);
    this.items = this.itemsSubject.asObservable();

  }
  getAll():Observable<FileResponse[]> {
    var r=  this.http.get<FileResponse[]>(`${baseUrl}/getAll`,   { withCredentials: true })
    .pipe(map(res => {
 this.itemsSubject.next(res);
return res;
    }));
    return r;
  }
  add(fileRequest:any):Observable<FileResponse> {
    return  this.http.post<FileResponse>(`${baseUrl}/add`,fileRequest ,  { withCredentials: true });
  }
}
