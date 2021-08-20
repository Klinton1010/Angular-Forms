import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReactiveServiceService {

  public Url="http://localhost:3500/enroll";
  constructor(private _http:HttpClient) { }

  gettingRegistered(data:any)
  {
   return this._http.post<any>(this.Url,data);
  }
}
