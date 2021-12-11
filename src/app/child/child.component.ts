import { Input,EventEmitter, Output,Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ModeService} from '../mode.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [ModeService]
})
export class ChildComponent implements OnInit {
  @Input()  parents: any[] = [];
  
  @Output() onChangedEvent = new EventEmitter<boolean>();
  constructor(
    private modeService: ModeService,
    private router: Router
  ) { }
  expanded:boolean = false;
  ngOnInit(): void {
  }
  change() {
    this.expanded = !this.expanded;
    console.log(this.expanded);
    
    this.onChangedEvent.emit(this.expanded);
  }
  setViewModeInUncle(viewmode:boolean){
    this.modeService.setViewmode(viewmode);
    this.router.navigate(
      ['/uncle', viewmode?1:2], 
      {
          queryParams:{
              'viewmode':viewmode, 
          }
      }
  );

  }
  setViewModeInUncleTrue(){
    // this.modeService.setViewmode(true);
    this.router.navigate(
      ['/uncle', 1], 
      {
          queryParams:{
              'viewmode':true, 
          }
      }
  );

  }
  setViewModeInUncleFalse(){
    this.modeService.setViewmode(false);
    this.router.navigate(
      ['/uncle', 2], 
      {
          queryParams:{
              'viewmode':false, 
          }
      }
  );

  }

}
