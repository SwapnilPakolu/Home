import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _isAuthenticated:boolean;
  constructor() { }

  public isAuthenticated():boolean
  {
    return this._isAuthenticated;
  }
  public Authenticate()
  {
    this._isAuthenticated=true;
  }
  public Logout()
  {
    this._isAuthenticated=false;
  }
}
