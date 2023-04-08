import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pluck, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResultsApiService {

  constructor(private http: HttpClient) { }

  getResultsList(YearSelection: number): Observable<any> {
      return this.http.get<any>(`https://ergast.com/api/f1/${YearSelection}.json`)
        .pipe(
          pluck('MRData', 'RaceTable', 'Races'),
          map((raw) => {
            return raw.map((row) => {
              return {
                'round': row.round,
                'name': row.raceName,
                'wikipedia': row.url,
                'results': YearSelection + "-" + row.round
              };
            });
          })
        );
  }

  getResultsDetails(selectedResultYear: string, selectedResultRound: string): Observable<any> {
    return this.http.get<any>(`https://ergast.com/api/f1/${selectedResultYear}/${selectedResultRound}/results.json`)
      .pipe(
        pluck('MRData', 'RaceTable', 'Races', '0', 'Results'),
        map((raw) => {
          return raw.map((row) => {
            return {
              'position': row.position,
              'name': row.Driver.givenName + " " + row.Driver.familyName,
              'time': row.Time && row.Time.time ? row.Time.time : '-',
              'status': row.status,
              'points': row.points
            };
          });
        })
      );
}
}
