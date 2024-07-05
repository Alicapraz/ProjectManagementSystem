import { Component } from '@angular/core';
import { ProjectService } from '../../../Services/project.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { TaskAddDialogComponent } from '../task-add-dialog/task-add-dialog.component';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent {
  projectIndex:any = 0;
  projectTitle:string = "";

  constructor(private route:ActivatedRoute, public projectService:ProjectService, private matDialog:MatDialog) {}

  ngOnInit(): void {
    this.projectIndex = this.route.snapshot.paramMap.get('projectIndex')
    this.projectTitle = this.projectService.projects[this.projectIndex].title;
  }

  openNewCardDialog(){
    const dialogRef = this.matDialog.open(TaskAddDialogComponent,{width:'500px', data: {projectIndex : this.projectIndex, editMode: false}});
  }

  deleteCard(indexCard : number){
    this.projectService.projects[this.projectIndex].cards.splice(indexCard, 1);
    this.projectService.updateDataToLocalStorage();
  }

  editCard(indexCard: number, card: any) {
    const dialogRef = this.matDialog.open(TaskAddDialogComponent, {
      width: '500px',
      data: { projectIndex: this.projectIndex, cardIndex: indexCard, editMode: true }
    });
  }
}
