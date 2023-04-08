import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pluck, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamsApiService {

  constructor(private http: HttpClient) { }

  getTeams(TypeSelection: string, YearSelection: number): Observable<any> {

    if (TypeSelection === 'drivers') {
      return this.http.get<any>(`https://ergast.com/api/f1/${YearSelection}/drivers.json`)
        .pipe(
          pluck('MRData', 'DriverTable', 'Drivers'),
          map((raw) => {
            return raw.map((row) => {
              return {
                'name': row.givenName + " " + row.familyName,
                'nationality': row.nationality,
                'url': row.url,
              };
            });
          })
        );
    } else {
      return this.http.get<any>(`https://ergast.com/api/f1/${YearSelection}/constructors.json`)
        .pipe(
          pluck('MRData', 'ConstructorTable', 'Constructors'),
          map((raw) => {
            return raw.map((row) => {
              return {
                'name': row.name,
                'nationality': row.nationality,
                'url': row.url,
              };
            });
          })
        );
    }
  }
  
}
