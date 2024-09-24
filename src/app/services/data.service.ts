import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }


  // api data seervice
  postBrikhoReg(data:any) {
    return this.http.post<any>(environment.baseUrl+'/api/v1/BrikhoRegistration', data);
  }

  postDeyalReg(data:any) {
    return this.http.post<any>(environment.baseUrl+'/api/v1/DeyalPotrikaRegistration', data);
  }

  getBrikkho(PageNumber:any, PageSize:any) {
    return this.http.get<any>(environment.baseUrl+'/api/v1/BrikhoRegistration'+'?PageNumber='+ PageNumber +'&PageSize='+ PageSize);
  }

  getDeyal(PageNumber:any, PageSize:any) {
    return this.http.get<any>(environment.baseUrl+'/api/v1/DeyalPotrikaRegistration'+'?PageNumber='+ PageNumber +'&PageSize='+ PageSize);
  }

  updateBrikkho(id: string, data: any): Observable<any> {
    const url = `${environment.baseUrl}/api/v1/BrikhoRegistration/update/${id}`; // Construct the URL with the ID
    return this.http.put<any>(url, data);
  }

  updateDeyal(id: string, data: any): Observable<any> {
    const url = `${environment.baseUrl}/api/v1/DeyalPotrikaRegistration/update/${id}`; // Construct the URL with the ID
    return this.http.put<any>(url, data);
  }

}
