import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Injectable()
export class AuthService {

    user$: Observable<firebase.User>;

    constructor(private afAuth: AngularFireAuth, private router: ActivatedRoute) {
        this.user$ = this.afAuth.authState;
    }

    login() {
        const returnUrl = this.router.snapshot.queryParamMap.get('returnUrl');
        localStorage.setItem('returnUrl', returnUrl);
        this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }

    logout() {
        this.afAuth.signOut();
    }
}
