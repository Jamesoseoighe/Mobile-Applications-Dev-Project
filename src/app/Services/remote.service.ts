import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class carService {

constructor(private httpClient:HttpClient) { }
GetCarData():Observable<any>{
return this.httpClient.get('https://jsonblob.com/api/jsonBlob/1237384914780676096')
}

}
