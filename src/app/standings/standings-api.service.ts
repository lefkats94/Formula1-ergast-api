import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pluck, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StandingsApiService {
  displayedColumns: string[];

  constructor(private http: HttpClient) { }

  getStandings(TypeSelection: string, YearSelection: number): Observable<any> {

    if (TypeSelection === 'drivers') {
      return this.http.get<any>(`https://ergast.com/api/f1/${YearSelection}/driverStandings.json`)
        .pipe(
          pluck('MRData', 'StandingsTable', 'StandingsLists', '0', 'DriverStandings'),
          map((raw) => {
            return raw.map((row) => {
              return {
                'position': row.position,
                'name': row.Driver.givenName + " " + row.Driver.familyName,
                'nationality': row.Driver.nationality,
                'constructor': row.Constructors[0].name,
                'points': row.points,
                'wins': row.wins
              };
            });
          })
        );
    } else {
      return this.http.get<any>(`https://ergast.com/api/f1/${YearSelection}/constructorStandings.json`)
        .pipe(
          pluck('MRData', 'StandingsTable', 'StandingsLists', '0', 'ConstructorStandings'),
          map((raw) => {
            return raw.map((row) => {
              return {
                'position': row.position,
                'name': row.Constructor.name,
                'nationality': row.Constructor.nationality,
                'points': row.points,
                'wins': row.wins
              };
            });
          })
        );
    }
  }

  getDisplayedColumns(TypeSelection: string){
    if (TypeSelection === 'driverStandings'){
      this.displayedColumns = ['position', 'name', 'nationality', 'constructor', 'wins', 'points'];
      return this.displayedColumns
    }
    else{
      this.displayedColumns = ['position', 'name', 'nationality', 'wins', 'points'];
      return this.displayedColumns
    }
  }
  
}
