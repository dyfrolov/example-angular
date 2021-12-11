import { AfterViewInit, Component, OnInit ,TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient} from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
// import { FormsModule } from '@angular/forms';
// import { MyDialogComponent } from './comps/my-dialog/my-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit  {
  httpError: any = null;;
  // @ViewChild('dialogRef')
  // dialogRef!: TemplateRef<any>;
  // @ViewChild('dialogRef')
  // dialogRef!: TemplateRef<any>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  // myFooList = ['Some Item', 'Item Second', 'Other In Row', 'What to write', 'Blah To Do']

  constructor(
    private http: HttpClient,
    // public dialog: MatDialog
    ){}
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  public ngOnInit(): void {
    this.http.get('http://localhost:8080/').subscribe(
      (data:any) => {
        this.httpError = null;
        this.rows=data;
        this.dataSource.data = data;
      console.log(this.rows);
    },
      error=>{
        this.httpError = error;
        console.log(this.httpError);
        
      }
    );  
  }
  // openTempDialog() {
  //   const myTempDialog = this.dialog.open(this.dialogRef, { data: this.myFooList });
  //   myTempDialog.afterClosed().subscribe((res) => {

  //     // Data back from dialog
  //     console.log({ res });
  //   });
  // }
  // openCompDialog() {
  //   const myCompDialog = this.dialog.open(MyDialogComponent, { data: this.myFooList });
  //   myCompDialog.afterClosed().subscribe((res) => {
  //     // Data back from dialog
  //     console.log({ res });
  //   });
  // }

  expanded:boolean = false;
  title = 'examle-angular';
  title2 = 'examle-angular';
  rows:any[] = [];
  displayedColumns: string[] = ['id', 'name'];
  dataSource = new MatTableDataSource<any>(this.rows);
   


  onChanged(expanded:boolean){
    this.expanded = expanded;
  }
}
