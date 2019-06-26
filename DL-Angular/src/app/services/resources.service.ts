import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest  } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor(private httpClient: HttpClient) { }

  getUsers(){
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }

  getResources(){
    return this.httpClient.get(environment.apiValuesUrl);
  }

  downloadFile(fileName: string){

    const url = `${environment.apiFilesUrl}?fileName=${fileName}`;

    return this.httpClient.get( url, { responseType: 'blob', headers: { ['Accept']: 'image/jpg'} });
  }
 
}
