import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProjectService } from '../../../Services/project.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-task-add-dialog',
  templateUrl: './task-add-dialog.component.html',
  styleUrl: './task-add-dialog.component.css'
})
export class TaskAddDialogComponent {

  TaskTitle : string = "";
  TaskDescription : string = "";
  assignee : string = "";
  dueDate : string = "";
  TaskStatus : string = "";

  tasks : Array<String> = [""];
  tasksLoop : any = [false];

  constructor(private matDialog:MatDialog, private dialogRef:MatDialogRef<TaskAddDialogComponent>, @Inject(MAT_DIALOG_DATA) public data:any,
  public projectService:ProjectService, private _snackBar:MatSnackBar) {}

  ngOnInit(): void {
    
    if (this.data.editMode) {
      this.TaskTitle = this.projectService.projects[this.data.projectIndex].cards[this.data.cardIndex].TaskTitle;
      this.TaskDescription = this.projectService.projects[this.data.projectIndex].cards[this.data.cardIndex].TaskDescription;
      this.assignee = this.projectService.projects[this.data.projectIndex].cards[this.data.cardIndex].assignee;
      this.dueDate = this.projectService.projects[this.data.projectIndex].cards[this.data.cardIndex].dueDate;
      this.TaskStatus = this.projectService.projects[this.data.projectIndex].cards[this.data.cardIndex].TaskStatus;
      this.tasksLoop = this.projectService.projects[this.data.projectIndex].cards[this.data.cardIndex].status;
      this.tasks = this.projectService.projects[this.data.projectIndex].cards[this.data.cardIndex].checklist;
    }
  }

  deleteTask(i:number){
    this.tasks.splice(i, 1);
    this.tasksLoop.splice(i, 1);
  }

  addTask(){
    this.tasks.push("");
    this.tasksLoop.push(false);
  }

  close(){
    this.dialogRef.close();
  }

  create() {

    if (this.tasks.some((element: any) => element === "")) {
      this._snackBar.open("Yeni Taskı Giriniz", "Ok");
    }
    else {
      if (!this.data.editMode) {
        this.projectService.projects[this.data.projectIndex].cards.push({
          TaskTitle: this.TaskTitle,
          TaskDescription: this.TaskDescription,
          assignee: this.assignee,
          dueDate: this.dueDate,
          TaskStatus: this.TaskStatus,
          checklist: this.tasks,
          status: this.tasksLoop
        });
      }
      else {
        this.projectService.projects[this.data.projectIndex].cards[this.data.cardIndex].TaskTitle = this.TaskTitle;
        this.projectService.projects[this.data.projectIndex].cards[this.data.cardIndex].TaskDescription = this.TaskDescription;
        this.projectService.projects[this.data.projectIndex].cards[this.data.cardIndex].assignee = this.assignee;
        this.projectService.projects[this.data.projectIndex].cards[this.data.cardIndex].dueDate = this.dueDate;
        this.projectService.projects[this.data.projectIndex].cards[this.data.cardIndex].TaskStatus = this.TaskStatus;
        this.projectService.projects[this.data.projectIndex].cards[this.data.cardIndex].status = this.tasksLoop;
        this.projectService.projects[this.data.projectIndex].cards[this.data.cardIndex].checklist = this.tasks;
      }

      this.projectService.updateDataToLocalStorage();
      this.close();
    }

  }

}
