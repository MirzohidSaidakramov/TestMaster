import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {


  constructor(private http: HttpClient) {


  }

  getPartItem() {
    return this.http.get('https://testmasterbackend.herokuapp.com/parts')
  }

  getTestsByPart() {
    return this.http.get('https://testmasterbackend.herokuapp.com/part/');
  }

  getQues(id:string) {
    return this.http.get('https://testmasterbackend.herokuapp.com/question/'+id);
  }

  getAnsw(id:string) {
    return this.http.get('https://testmasterbackend.herokuapp.com/answer/'+id);
  }

}
