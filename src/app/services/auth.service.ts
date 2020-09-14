import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public host:string='http://192.168.1.5:8080/';

  constructor(private http:HttpClient) { }
  
  login(data):Observable<any>{
      return this.http.post(this.host+'login',data)
  }

  signup(data):Observable<any>{
     return this.http.post(this.host+'clients',data);
  }

  validation(data):Observable<any>{
    return this.http.post(this.host+'validation',data);
  }

}
