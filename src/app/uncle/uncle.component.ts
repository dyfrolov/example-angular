import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import {BehaviorSubject, Observable, of, Subscription} from 'rxjs';
import {ModeService} from '../mode.service';
// import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-uncle',
  templateUrl:'./uncle.component.html',
  styleUrls: ['./uncle.component.css'],
  providers: [ModeService]
})
export class UncleComponent implements OnInit, OnChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
   {
  
  public viewmode$ = new Observable<string|null>();
  public viewmode:boolean = false;
  id:number=0;

  // private routeSubscription: Subscription;
  // private querySubscription: Subscription;

  // private _isViewModeSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  // public isViewModeObs: Observable<boolean> = this._isViewModeSubject.asObservable();
  routeSubscription:any;
  querySubscription:any;
  constructor(
    private activateRoute: ActivatedRoute,
    private modeService: ModeService,
    // public dialog: MatDialog
  ) { 
    console.log('==CONSTRUCTOR');
    // this.id = activateRoute.snapshot.params['id'];
    this.routeSubscription = activateRoute.params.subscribe(params=>this.id=params['id']);
    this.querySubscription = activateRoute.queryParams.subscribe(
        (queryParam: any) => {
            this.viewmode = queryParam['viewmode']==='true'?true:false;
    })
  }

  ngDoCheck(): void {
    console.log('==DoCheck');
    // this.activateRoute.params.subscribe(params=>this.id=params['id']);
    // this.activateRoute.queryParams.subscribe(
    //     (queryParam: any) => {
    //         this.viewmode = queryParam['viewmode']; 
    //     }
    //     );
    // this.viewmode = this.modeService.getViewmode();

    // this.modeService.isAuthenticatedObs.subscribe(viewmode => {
    //   console.log("ngDoCheck modeService.isAuthenticatedObs.subscribe, viewmode:",viewmode); 
      
    //   this.viewmode = viewmode
    // });
    
  }
  ngAfterContentInit(): void {
    console.log('==AfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('==AfterContentChecked ');
  }
  ngAfterViewInit(): void {
    console.log('==ngAfterViewInit ');
  }
  ngAfterViewChecked(): void {
    console.log('==ngAfterViewChecked ');
  }
  ngOnDestroy(): void {
    console.log('== ngOnDestroy');
  }
  ngOnChanges(changes: SimpleChanges): void {
    // this.viewmode = !this.viewmode;
    // console.log('changes:', changes);
    console.log('==ngOnChanges ');
  }

  ngOnInit(): void {
    console.log('==ngOnInit');
    this.viewmode$ = 
    this.activateRoute.queryParamMap.pipe(
      map((params: ParamMap) => {
        const viewmode = params.get('viewmode');
        this.viewmode=viewmode==='true'?true:false;
        return params.get('viewmode');
      }),
    );
      // .subscribe(data=> this.id = +data);
      // const viewmode = this.viewmode; 
      // this.viewmode = !this.viewmode;
      
      // setTimeout(()=> {this.viewmode=!viewmode, console.log(this.viewmode); }, 0 );
      // setTimeout(()=>this.toggleViewmode(), 1000);
       // authenticated
      //  this.isViewModeObs.subscribe(viewmode => this.viewmode = viewmode);
    }
    toggleViewmode(){
      this.viewmode = !this.viewmode;
      console.log(this.viewmode);
      // this.viewmode$ = this.viewmode?of('true'):of('false');
      
    }
    // openDialog() {
    //   const dialogRef = this.dialog.open(DialogContentExampleDialog);
  
    //   dialogRef.afterClosed().subscribe(result => {
    //     console.log(`Dialog result: ${result}`);
    //   });
    // }
}


// @Component({
//   templateUrl: 'dialog-content-example-dialog.html',
// })
// export class DialogContentExampleDialog {}