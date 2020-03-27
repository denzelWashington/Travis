import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {

    constructor(private db: AngularFirestore) { }

    save(user: firebase.User) {
        let exist = false;
        this.db.collection('/users/').get().subscribe(users => {
            users.docs.map(doc => {
                const data = doc.data();
                if (data.email == user.email) {
                    exist = true;
                }
            });
            if (!exist) {
                this.db.collection('/users/').add({
                    name: user.displayName,
                    email: user.email
                });
            }
        });
    }

    userRole(){
        return true;
    }

}