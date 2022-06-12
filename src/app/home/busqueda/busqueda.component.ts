import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

export interface fbFile {
  carrera: string,
  filename: string
}



@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  displayedColumns: string[] = ['carrera', 'filename', 'download'];
  dataSource: fbFile[] = [];



  constructor(
    private fb: FirebaseService
  ) { }

  ngOnInit(): void {
    this.fb.getCollection('files').subscribe(
      res => {
        console.log(res);
        this.dataSource = res;
      }
    );
  }

  downloadFile(link: string){
    window.open(link);
  }

}

