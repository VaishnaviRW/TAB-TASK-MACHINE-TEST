import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-render',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  selektedFremWork :string ='angular'
  constructor() { 

  }

  

  ngOnInit(): void {
  }

      onTabChange(skill :string){
        this.selektedFremWork=skill
      }

}
