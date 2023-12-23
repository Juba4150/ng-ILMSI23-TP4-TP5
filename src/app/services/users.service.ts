import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { requestListParams } from '../types/requestListParams.class';
import { UserType } from '../types/user.type';
import { ResponseListDto } from '../types/responseListDto.interface';
import { UserHttpAddDto } from '../types/userHttpAddDto.type';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  _apiReqresUrl = environment._apiReqres;

  constructor(private httpClient: HttpClient) {}

  getUsers(
    listParams: requestListParams
  ): Observable<ResponseListDto<UserType>> {
    return this.httpClient.get<ResponseListDto<UserType>>(
      this._apiReqresUrl +
        '/users?page=' +
        listParams.page +
        '?per_page=' +
        listParams.per_page
    );
  }

  addUser(userHttpAddDto: UserHttpAddDto): Observable<any> {
    return this.httpClient.post<any>(
      this._apiReqresUrl + '/users',
      userHttpAddDto
    );
  }
}
