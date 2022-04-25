import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  hasFiles = false;
  file!: File;

  constructor() { }

  ngOnInit(): void {
  }

  onFileSelect(event: any){
    this.file = event.target.files[0];
    console.log("Archivo: ", this.file);
    this.hasFiles = true;
  }

}
