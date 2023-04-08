import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pluck, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CircuitsApiService {

  standingsData: any[];
  displayedColumns: string[];

  constructor(private http: HttpClient) { }

  getCircuits(YearSelection: number): Observable<any> {
      return this.http.get<any>(`https://ergast.com/api/f1/${YearSelection}/circuits.json`)
        .pipe(
          pluck('MRData', 'CircuitTable', 'Circuits'),
          map((raw) => {
            return raw.map((row) => {
              return {
                'name': row.circuitName,
                'country': row.country,
                'locality': row.locality,
                'url': row.url
              };
            });
          })
        );
  }
}
