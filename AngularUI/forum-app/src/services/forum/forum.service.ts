import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { RequestService } from '../request/RequestService';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  private readonly apiUrl = "http://localhost:7000/forum"

  constructor(private req: RequestService, private auth: AuthService) { 

  }


}
