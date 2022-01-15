import { Input,EventEmitter, Output,Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {ModeService} from '../mode.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [ModeService]
})
export class ChildComponent implements OnInit {
  hidePassword = true;
  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  // passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
    passwordFormControl = new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)]);
  matcher = new MyErrorStateMatcher();


  @Input()  parents: any[] = [];
  @Output() onChangedEvent = new EventEmitter<boolean>();
  filterString='';

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
  onFilter(filterString:string){
    this.filterString = filterString;
    console.log('_filter string: ', this.filterString);
    
  }
}
