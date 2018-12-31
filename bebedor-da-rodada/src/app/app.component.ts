import { Component, Inject, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { UserService } from '../provider/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  title = 'bebedor-da-virada';
  name: String;

  constructor(
    @Inject(LOCAL_STORAGE) public storage: WebStorageService,
    private modalService: NgbModal,
    private userService: UserService,
  ) {
    this.name = "";
   }

  public ngOnInit() {
    this.name = "";

    this.name = this.getFromLocal("name");
    if(this.name == undefined) {
      this.name = new String;
    }

    if (this.name == "" || this.name == undefined) {
      let btn = document.getElementById("openContent");
      btn.click();
    }
  }


  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  insertUser() {
    this.saveInLocal("name", this.name);

    let close = document.getElementById("close");
    close.click();

    this.userService.addUser(this.name)
    .subscribe( res => {
      alert("Usuário inserido com sucesso!");
    })

    window.location.href = "/";

  }

  public getFromLocal(key): string {
    return this.storage.get(key);
  }

  public saveInLocal(key, val): void {
    this.storage.set(key, val);
  }
}


