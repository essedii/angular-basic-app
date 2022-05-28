import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class Sizer {
  isMobile$: Observable<boolean>;
  constructor(sizer: BreakpointObserver) { 
    this.isMobile$ = sizer.observe(['(max-width: 1024px)']).pipe(
      map((state: BreakpointState) => state.matches)
    );
  }
}
