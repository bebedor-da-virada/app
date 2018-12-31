import { Component, Inject, OnInit } from '@angular/core';
import { NgbModal } from '../../node_modules/@ng-bootstrap/ng-bootstrap';

import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'bebedor-da-virada';
  name: String;

  constructor(
    @Inject(LOCAL_STORAGE) public storage: WebStorageService,
    private modalService: NgbModal
  ) { }

  public ngOnInit() {
    this.name = this.getFromLocal("name");
  }


  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  insertUser() {
    this.saveInLocal("name", this.name);
  }

  public getFromLocal(key): string {
    return this.storage.get(key);
  }

  public saveInLocal(key, val): void {
    this.storage.set(key, val);
  }
}


