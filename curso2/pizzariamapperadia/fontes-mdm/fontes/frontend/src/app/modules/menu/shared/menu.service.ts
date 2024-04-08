import { Injectable, Injector } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from "app/modules/menu/shared/menu.model";
import { BaseResourceService } from 'app/shared/services/shared.service'; 
import { environment } from 'enviroment/environment'; 

@Injectable({
  providedIn: 'root'
})
export class MenuService extends BaseResourceService<Menu> {

  protected http: HttpClient 

  constructor(protected override injector: Injector) { 
    var url = environment.backendUrl+"/api/menu"; 

    super(url, injector, Menu.fromJson) 
  } 
}
