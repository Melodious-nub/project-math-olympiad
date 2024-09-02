import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }


  // api data seervice
  postSuggection(data:any) {
    return this.http.post<any>(environment.baseUrl+'/api/v1/Suggection', data);
  }

}
