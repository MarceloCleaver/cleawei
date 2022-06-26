import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { finalize, map } from 'rxjs/operators';
import { UploadMetadata } from '@angular/fire/compat/storage/interfaces';
import { Observable } from 'rxjs';

export interface fbFile {
  carrera: string,
  filename: string,
  link: string
}


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  basePath = '/pdfs'
  basePathDB = 'files'

  constructor(
    private _afs: AngularFirestore,
    private _storage: AngularFireStorage

  ) {


   }

   /**
    *
    * @param path Nombre de la colección a consultar
    * @returns Observable
    */

   getCollection(path: string){
     let colection = this._afs.collection(path)
     return colection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data: any = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
   }

   pushFileToStorage(fileUpload: File): Observable<number | undefined> {
    const filePath = `${this.basePath}/${fileUpload.name}`;
    const storageRef = this._storage.ref(filePath);
    const uploadTask = this._storage.upload(filePath, fileUpload);
    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe((downloadURL:any) => {
          let url = downloadURL;
          let name = fileUpload.name;
          this.saveFileData(url, name);
        });
      })
    ).subscribe();
    return uploadTask.percentageChanges();
  }

  private saveFileData(url: string, name: string): void {
    let newFile: fbFile = {
      carrera: 'Ingeniería informática',
      filename: name,
      link: url
    }
    this._afs.collection(this.basePathDB).add(newFile);
  }


}
