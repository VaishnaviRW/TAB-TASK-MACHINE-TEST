import { Component, OnInit } from '@angular/core';
import { tabArr } from '../../modules/app';

@Component({
  selector: 'app-render',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {



selectedskill :string='html'


selectedArr :string ='javascript';


TabArr1 : tabArr[] = [
  {
    id: 'javascript',
    name: 'JavaScript',
    defination: 'JavaScript is a programming language used to create dynamic and interactive web pages and modern applications.'
  },
  {
    id: 'html',
    name: 'HTML',
    defination: 'HTML is a markup language used to define the structure of web pages using elements like headings, paragraphs, and links.'
  },
  {
    id: 'css',
    name: 'CSS',
    defination: 'CSS is used to style and layout web pages, including colors, fonts, spacing, and responsive design.'
  },
  {
    id: 'angular',
    name: 'Angular',
    defination: 'Angular is a TypeScript-based framework used to build scalable, dynamic, and single-page web applications.'
  }
];



value=123.080;
value1=23;


  constructor() { }

  ngOnInit(): void {
  }

onTabChange(skill1 :string){
  this.selectedArr=skill1
}

  onTabChang(skill :string){
    this.selectedskill=skill
  }

}