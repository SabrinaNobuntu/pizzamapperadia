import { Injectable, Injector } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cozinha } from "app/modules/cozinha/shared/cozinha.model";
import { BaseResourceService } from 'app/shared/services/shared.service'; 
import { environment } from 'enviroment/environment'; 

@Injectable({
  providedIn: 'root'
})
export class CozinhaService extends BaseResourceService<Cozinha> {

  protected http: HttpClient 

  constructor(protected override injector: Injector) { 
    var url = environment.backendUrl+"/api/cozinha"; 

    super(url, injector, Cozinha.fromJson) 
  } 
}
