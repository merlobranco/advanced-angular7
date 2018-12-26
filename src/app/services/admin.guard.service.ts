import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  constructor(
    private _router: Router,
    private _userService: UserService
  ) { }

  canActivate() {
    const identity = this._userService.getIdentity();

    if (identity && identity.role === 'ROLE_ADMIN') {
      return true;
    }
    this._router.navigate(['/home']);
    return false;
  }
}
