import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { first, map } from 'rxjs/operators';
import { UploadMetadata } from '@angular/fire/compat/storage/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

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
      first(),
      map(actions =>
        actions.map(a => {
          const data: any = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
   }

   saveFileFB(path: string, data: any, metadata?: UploadMetadata ){
    this._storage.upload(path, data, metadata).then(resp => console.log(resp))
  }


}
