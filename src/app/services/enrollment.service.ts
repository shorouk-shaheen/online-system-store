import { Iuser } from './../interfaces/iuser';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  _url = "https://httpbin.org/post"

  constructor(private _http: HttpClient) { }
  enroll(user:Iuser) {
    return this._http.post<any>(this._url, user)
  }
}
