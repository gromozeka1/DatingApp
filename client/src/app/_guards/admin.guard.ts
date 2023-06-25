import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private accountService: AccountService,
    private toastrService: ToastrService
  ) {}

  canActivate(): Observable<boolean> {
    return this.accountService.currentUser$.pipe(
      map(user => {
        if (!user) return false;
        if (user.roles.includes('Admin') || user.roles.includes('Moderator')) {
          return true;
        } else {
          this.toastrService.show('You cannot enter this area');
          return false;
        }
      })
    );
  }
}