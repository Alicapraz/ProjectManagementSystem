import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProjectService } from '../../../Services/project.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-project-edit-dialog',
  templateUrl: './project-edit-dialog.component.html',
  styleUrl: './project-edit-dialog.component.css'
})
export class ProjectEditDialogComponent {
  name : string = "";
  description : string = "";
  startDate : string = "";
  endDate : string = "";
  ProjectStatus : string = "";

  tasks : Array<String> = [""];
  tasksLoop : any = [false];

  constructor(private matDialog:MatDialog, private dialogRef:MatDialogRef<ProjectEditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data:any,
  public projectService:ProjectService, private _snackBar:MatSnackBar) {}

  ngOnInit(): void {
    
    if (this.data.editMode) {
      this.name = this.projectService.projects[this.data.projectIndex].cards[this.data.cardIndex].name;
      this.description = this.projectService.projects[this.data.projectIndex].cards[this.data.cardIndex].description;
      this.startDate = this.projectService.projects[this.data.projectIndex].cards[this.data.cardIndex].startDate;
      this.endDate = this.projectService.projects[this.data.projectIndex].cards[this.data.cardIndex].endDate;
      this.ProjectStatus = this.projectService.projects[this.data.projectIndex].cards[this.data.cardIndex].ProjectStatus;
      this.tasksLoop = this.projectService.projects[this.data.projectIndex].cards[this.data.cardIndex].status;
    }
  }

  editProject() {

    
        this.projectService.projects[this.data.projectIndex].cards[this.data.cardIndex].name = this.name;
        this.projectService.projects[this.data.projectIndex].cards[this.data.cardIndex].description = this.description;
        this.projectService.projects[this.data.projectIndex].cards[this.data.cardIndex].startDate = this.startDate;
        this.projectService.projects[this.data.projectIndex].cards[this.data.cardIndex].endDate = this.endDate;
        this.projectService.projects[this.data.projectIndex].cards[this.data.cardIndex].status = this.ProjectStatus;
        this.projectService.projects[this.data.projectIndex].cards[this.data.cardIndex].status = this.tasksLoop;
      }

      

    close(){
      this.dialogRef.close();
    }

  }

