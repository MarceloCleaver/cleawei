import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  hasFiles = false;
  file!: File;
  progress = 0;
  dialogo: any;


  constructor(
    private fs: FirebaseService,
    public dialog: MatDialog,
    public router: Router
  ) {

   }

  ngOnInit(): void {

  }

  onFileSelect(event: any){
    this.file = event.target.files[0];
    console.log("Archivo: ", this.file);
    if(this.file.type !== "application/pdf"){
      Swal.fire({
        icon: 'warning',
        title: 'Error',
        text: 'Solo se permiten archivos pdf',
      });
    }
    else{
      this.hasFiles = true;
    }
  }

  uploadFile(plantilla: any){
    if(!this.hasFiles){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ha ocurrido un error',
      }).then(
        () => window.location.reload()
        )
      }
    else{
      this.dialogo = this.dialog.open(plantilla,{disableClose: true})
      this.fs.pushFileToStorage(this.file).subscribe(
        (res) => this.progress = res!
      )

    }
  }

  moveToFiles(){
    this.dialogo.close();
    new Promise( resolve => setTimeout(resolve, 1000) );
    this.router.navigate(['/busqueda']);
  }


}
