import { Observable } from 'rxjs/Observable';


export interface Selector<T, U> {
  (state: Observable<T>): Observable<U>;
}
