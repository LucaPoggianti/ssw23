import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})

export class AccessArchiveService {
  base: string = 'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/';
  key: string = '8b1dd28c';
  
  public getArchive(): Observable<AjaxResponse<string>> {
    return ajax({
      method: 'GET',
      url: this.base + 'get?key=' + this.key,
      crossDomain: true
    });    
  }

  public saveArchive(newArchive:string): Observable<AjaxResponse<any>> {
    return ajax({
      method: 'POST',
      url: this.base + 'set?key=' + this.key,
      crossDomain: true,
      body: newArchive
    });
  }
}