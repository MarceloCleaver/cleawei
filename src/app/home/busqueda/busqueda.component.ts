import { Component, OnDestroy, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

export interface fbFile {
  carrera: string,
  filename: string,
  link: string
}



@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['carrera', 'filename', 'download'];
  dataSource: fbFile[] = [];
  sub: any;


  constructor(
    private fb: FirebaseService
  ) { }

  ngOnInit(): void {
    this.sub = this.fb.getCollection('files').subscribe(
      res => {
        console.log(res);
        this.dataSource = res;
      }
    );
  }

  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }

  downloadFile(link: string){
    window.open(link);
  }




}

