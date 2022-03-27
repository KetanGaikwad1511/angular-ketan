import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassInterface } from './class-interface';

@Injectable()
export class GetService {
  constructor(private http: HttpClient) {}

  private url = './assets/file.json';

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
