import { UserService } from './services/user.service';
import { Component, DoCheck, OnInit, NgZone } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit {
  count = 0;
  constructor(private authService: AuthService,
              private userService: UserService,
              private zone: NgZone) {

    this.authService.user$.subscribe(user => {
      if (user) {
        this.userService.save(user);
      }
    });
  }

  increase() {
    this.count++;
  }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      for (let index = 0; index < 100; index++) {
        this.count++;
      }
    });


  }

  ngDoCheck() {
    console.log('Change detection has been run');
  }




}
