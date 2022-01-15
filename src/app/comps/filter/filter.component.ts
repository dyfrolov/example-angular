import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() filterTitle:string='';

  @Output() onFilter = new EventEmitter<string>();
  
  show:boolean = false;
  filterString:string='';
  filterOperator:string='=';

  constructor() { }


  ngOnInit(): void {
  }
  onBtnFilterClick(){
    this.show = !this.show;
    console.log('show: ', this.show);
    
  }
  onBtnOkClick(){
    console.log('FILTER STRING: ', this.filterString );
    this.show = false;
    this.onFilter.emit(`${this.filterOperator} ${this.filterString}`);
  }
  onBtnResetClick(){
    console.log('FILTER STRING: ', this.filterString );
    this.show = false;
    this.onFilter.emit(``);
  }
}
