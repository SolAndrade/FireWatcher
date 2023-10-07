import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, forkJoin, switchMap, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import * as Papa from 'papaparse';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  config={
    uri: 'https://firms.modaps.eosdis.nasa.gov',
    endpoint: 'api/area/csv',
    source: 'VIIRS_SNPP_NRT',
    map_key: '9c72902d2d8b09431e1534e40ef85081'
  }

  constructor(private http: HttpClient) { }

  getData(area: string, date: string): Observable<any> {
    const url = `${this.config.uri}/api/area/csv/${this.config.map_key}/${this.config.source}/${area}/1/${date}`;

    return this.http.get(url, { responseType: 'text'}).pipe(
      map(data => {
        const parsedData = Papa.parse(data, {
          header: true
        });
        return parsedData.data;
      }),
      catchError((error) => {
        console.error('Error fetching data:', error);
        return throwError('Error fetching data. Please try again later.');
      })
    );
  }
}
