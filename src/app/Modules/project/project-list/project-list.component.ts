import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectService } from '../../../Services/project.service';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AddProjectDialogComponent } from '../add-project-dialog/add-project-dialog.component';
import { ProjectEditDialogComponent } from '../project-edit-dialog/project-edit-dialog.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent implements OnInit{

  projectIndex:any = 0;

  constructor(public projectService : ProjectService, private httpClient:HttpClient,private matDialog:MatDialog) {}

  ngOnInit(): void{

    
  }

  openNewProjectDialog(){
    const dialogRef = this.matDialog.open(AddProjectDialogComponent,{width:'500px'});
  }

  deleteProject(index : number){
    this.projectService.deleteProject(index);
  }

  editProject(index: number, project: any){
    const dialogRef = this.matDialog.open(ProjectEditDialogComponent, {
      width: '500px',
      data: { projectIndex: this.projectIndex, indexProject: index, editMode: true }
    });
  }

}
