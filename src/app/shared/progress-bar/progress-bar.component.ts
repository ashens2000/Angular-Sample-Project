import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'stu-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input()  progress:number=0;
  @Output() progressClick:EventEmitter<string>=new EventEmitter<string>();
  color:string='';


  constructor() { }

  ngOnInit(): void {
    if(this.progress<35)
    {
      this.color='red';
    }
    else if(this.progress<50)
    {
       this.color='yellow';
    }
    else if(this.progress<75)
    {
      this.color='lightgreen';
    }else
    {
      
      this.color='green';
    }
  }

  onClick()
  {
    this.progressClick.emit(`Progress is ${this.progress}%`);
  }

}
