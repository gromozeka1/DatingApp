import { Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MembersService } from '../_services/members.service';
import { Member } from '../_modules/member';

@Injectable({
  providedIn: 'root'
})
export class MemberDetailedResolver  {
  constructor(private memberService: MembersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Member> {
    return this.memberService.getMember(route.paramMap.get('username')!);
  }
}
