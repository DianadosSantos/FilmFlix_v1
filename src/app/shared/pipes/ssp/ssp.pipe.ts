import { Pipe, PipeTransform } from '@angular/core';
import { catchError, map, Observable, of, startWith } from 'rxjs';

/**
 * Interface that handle three possible states:
 * - `value`: when Observable emits a value of type `T`.
 * - `error`: when Observable operation throws a error.
 * - `loading`: when Observable is fetching data.
 */
interface State<T> {
  value?: T;
  loading?: boolean;
  error?: string;
}

/**
 * A pipe that handle the _Segmented State Pattern(SSP)_.
 * @usage
 * ```
 * <div *ngIf="obs$ | ssp | async as state">
 *  <p *ngIf="state.loading">Loading...</p>
 *  <p *ngIf="state.error">An error has occurred: {{ state.error }}</p>
 *  <p *ngIf="state.value">Result: {{ state.value }}</p>
 * </div>
 * ```
 *
 */
@Pipe({
  name: 'ssp',
})
export class SspPipe implements PipeTransform {
  transform<T>(obs$: Observable<T>): Observable<State<T>> {
    return obs$.pipe(
      map((value) => {
        return { value };
      }),
      startWith({ loading: true }),
      catchError((error) => of({ loading: false, error }))
    );
  }
}
