import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ManageService {
  apiUrl = "http://192.168.1.5:8080/";

  constructor(private http:HttpClient) { }

  //compte du client
  compteClient(id):Observable<any>{
    return this.http.get(this.apiUrl+'compteclient/'+id);
  }

  validate(data):Observable<any>{
    return this.http.post(this.apiUrl+'validationRetrait',data);
  }

  virement(data):Observable<any>{
    return this.http.post(this.apiUrl+'transfertSolde',data);
  }

  listOperations(id):Observable<any>{
    return this.http.get(this.apiUrl+'operationsByCompte/'+id);
  }
}
