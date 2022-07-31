import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://sheet.best/api/sheets/7f6d90aa-975e-4c68-acb4-7224dd0d7862';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private httpClient: HttpClient) { }

  //Retorna lista de users

  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  //salva usuário create

  postUser(user: User):Observable<User>{
    return this.httpClient.post<User>(this.apiUrl, user, this.httpOptions)
  }

  //Exclui o usuário DELETE

  deleteUser(id: number): Observable<User>{
    return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`)
  }

  //Edita Usuário UPDATE

  uptdateUser(id: string, user: User):Observable<User>{  
    return this.httpClient.put<User>(`${this.apiUrl}/id/${id}`, user, this.httpOptions);
  }

  //Lista Usuários único

  getUser(id: string):Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.apiUrl}/id/${id}`)
  }

}
