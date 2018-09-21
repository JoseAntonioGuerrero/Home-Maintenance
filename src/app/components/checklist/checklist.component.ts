import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   var aux= JSON.parse(localStorage.getItem('checklist'))
   
console.log('what does this do',Object.entries(aux)[0])



   
   Object.keys(aux.CheckList).forEach((function(element) {
    console.log(element);
  }))
   
 
  

 

  }
}
