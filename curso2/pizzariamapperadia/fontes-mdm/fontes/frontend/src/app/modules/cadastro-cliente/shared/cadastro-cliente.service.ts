import { Injectable, Injector } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CadastroCliente } from "app/modules/cadastro-cliente/shared/cadastro-cliente.model";
import { BaseResourceService } from 'app/shared/services/shared.service'; 
import { environment } from 'enviroment/environment'; 

@Injectable({
  providedIn: 'root'
})
export class CadastroClienteService extends BaseResourceService<CadastroCliente> {

  protected http: HttpClient 

  constructor(protected override injector: Injector) { 
    var url = environment.backendUrl+"/api/cadastroCliente"; 

    super(url, injector, CadastroCliente.fromJson) 
  } 
}
