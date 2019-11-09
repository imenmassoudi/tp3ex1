import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
tabNb=4;
tab=[41,18,23,58];
titre:string="Opérations sur un tableau";

minimum(){
 var min=this.tab[0];
  for(var i=1;i<this.tab.length;i++){
    {if(this.tab[i]<min)    
      min=this.tab[i];}
  }
  return(min);
}
//calcul de la moyenne
moyenne(){
  var s=0;
  for(let i of this.tab){
    s=s+i;
  }
  return(s/this.tabNb);
}


  constructor() { }

  ngOnInit() {
  }

}
