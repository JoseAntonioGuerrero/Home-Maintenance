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

  casasCollection:AngularFirestoreCollection<Casa>;
  casas:Observable<Casa[]>

  constructor(private afs:AngularFirestore) { }

  ngOnInit() {
    
    this.casasCollection=this.afs.collection('Viviendas') //reference
    this.casas=this.casasCollection.valueChanges()//observable of house data
    console.log('this is working',this.casas)
  }

}
