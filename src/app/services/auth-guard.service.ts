import { AuthService } from './auth.service';
import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.authService.user$.pipe(
            map(user => {
                if (user) return true;
                else {
                    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
                    return false;
                }
            })
        );
    }

}
