import { Component, OnInit } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore'
import { Observable } from 'rxjs';


interface Casa {
  Checklist?:any;
  dueño:string;
  id:number;

}
@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  id:number;
  casasCollection:AngularFirestoreCollection<Casa>;
  casas:Observable<Casa[]>
  
  constructor(private afs:AngularFirestore) { }

  ngOnInit() {
    
    //this.casasCollection=this.afs.collection('Viviendas') //reference
    //this.casas=this.casasCollection.valueChanges()//observable of house data
    console.log('this is working',this.casas)
  }
Buscar(){
  
  console.log("el id de la vivienda a buscar es:",this.id)
  var docRef = this.afs.collection("Viviendas").doc('uGlqU1JIqZw9zgfqu32E');
  docRef.get().subscribe(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
})



  
  console.log("volvio esto",docRef)
}
}
