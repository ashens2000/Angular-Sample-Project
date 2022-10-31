import { Component, OnInit } from '@angular/core';
import students from './data/students.json';

@Component({
  selector: 'stu-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  title:string="Student Management System"
  students:any[]=students;
  message:string='';
  filteredstudents:any[]=students;
  showicon:boolean=false;
  private _nameFilter:string='';


  constructor() { }

  ngOnInit(): void {
  }


  set nameFilter(value:string)
  {
    
    this._nameFilter=value;
    this.filterbyname();
  }

  get nameFilter()
  {
    return this._nameFilter;
  }
  toggleicon(){
    this.showicon=!this.showicon;
  }

  filterbyname()
  {
    this.filteredstudents=this.students.filter(student=>student.Name.includes(this.nameFilter))
  }

  onmessageReceived(value:string)
  {
    this.message=value;
  }

}
