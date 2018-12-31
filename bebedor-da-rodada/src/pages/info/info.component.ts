import { Component, OnInit, Inject } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { BebidaUsuario } from '../../model/bebida_usuario';
import { BebidaUsuarioService } from '../../provider/bebida_usuario.service';
import { BebidaService } from '../../provider/bebida.service';
import { Bebida } from '../../model/bebida';

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  providers: [BebidaUsuarioService, BebidaService]
})
export class InfoComponent implements OnInit {

  name:String;
  bebidaUsuarios: BebidaUsuario;
  bebidas: Bebida[];
  pontuacao: String;

  constructor(
    @Inject(LOCAL_STORAGE) public storage: WebStorageService,
    private bebidaUsuarioService: BebidaUsuarioService,
    private bebidaService: BebidaService
  ) { }

  ngOnInit() {
    this.init();
  }

  public init() {
    this.pontuacao = "0";
    this.bebidas = new Array<Bebida>();
    this.bebidaUsuarios = new BebidaUsuario();
    this.name = this.getFromLocal("name");

    if( this.name  != undefined) {
      this.bebidaUsuarioService.getBebidaUsuario(this.name)
      .subscribe(res => {
        this.bebidaUsuarios = res;
  
        this.pontuacao = this.bebidaUsuarios.pontuacao;
  
        this.bebidaService.getBebidas()
        .subscribe(res => {
          this.bebidas = res;
          
          console.log(this.bebidas)
          console.log(this.bebidaUsuarios)
  
          for(let bebida of this.bebidas) {
            for(let bebidaUsuario of this.bebidaUsuarios.bebidas) {
              if(bebida.nome_bebida == bebidaUsuario.nome_bebida) {
                bebida.qtde = bebidaUsuario.qtde;
                bebida.pontuacao = bebidaUsuario.pontuacao;
              }
            }
          }
  
          for(let bebida of this.bebidas) {
            if(bebida.qtde == undefined) {
              bebida.qtde = 0;
            }
  
  
            if(bebida.pontuacao == undefined) {
              bebida.pontuacao = 0;
            }
          }
  
  
  
        })
  
  
      });
    }
  }

  public adicionarBebida(nomeBebida:String) {

    this.bebidaUsuarioService.addBebidaUsuario(this.name, nomeBebida)
    .subscribe(res => {
      alert("Bebida adicionada com sucesso!");
      this.init();
    });
  }

  public getFromLocal(key): string {
    return this.storage.get(key);
  }

}
