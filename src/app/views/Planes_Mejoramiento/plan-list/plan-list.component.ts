import { Component, OnInit } from '@angular/core';
import { PlanNewComponent } from '../plan-new/plan-new.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.scss']
})
export class PlanListComponent implements OnInit {

  constructor(public dialog: MatDialog, public dialogview: MatDialog,) { }

  ngOnInit() {
  }
  openNew(){
    const dialogRef = this.dialog.open(PlanNewComponent,{
      width: '700px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
