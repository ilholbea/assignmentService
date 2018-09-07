import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable()
export class RestApi {
  readonly backEndApi: string = '/api/';

  constructor(private http: HttpClient) {

  }

  getResultsFromBackEnd(input: string): Observable<any> {
    return this.http.get<any>(this.backEndApi + 'getResults?input=' + input)
      .pipe(
        tap(
          data => data,
          error => console.log(error)
        )
      )
  }

}
