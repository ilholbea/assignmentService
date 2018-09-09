import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {ExternalResponse} from "../model/external-response";
import {User} from "../model/user";

@Injectable()
export class RestApi {
  readonly backEndApi: string = '/api/';

  constructor(private http: HttpClient) {

  }

  getResultsFromBackendGoogle(input: string): Observable<ExternalResponse[]> {
    return this.http.get<ExternalResponse[]>(this.backEndApi + 'getResultsFromGoogle?input=' + input)
      .pipe(
        tap(
          data => data,
          error => console.log(error)
        )
      )
  }

  getResultsFromBackendiTunes(input: string): Observable<ExternalResponse[]> {
    return this.http.get<ExternalResponse[]>(this.backEndApi + 'getResultsFromiTunes?input=' + input)
      .pipe(
        tap(
          data => data,
          error => console.log(error)
        )
      )
  }

  getAll() {
    return this.http.get<User[]>('/api/users');
  }

  getById(id: number) {
    return this.http.get('/api/users/' + id);
  }

  create(user: User) {
    return this.http.post('/api/users', user);
  }

  update(user: User) {
    return this.http.put('/api/users/' + user.id, user);
  }

}
