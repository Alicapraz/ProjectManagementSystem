import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../../../Services/project.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-project-dialog',
  templateUrl: './add-project-dialog.component.html',
  styleUrl: './add-project-dialog.component.css'
})
export class AddProjectDialogComponent {
    projectForm = new FormGroup({
    name : new FormControl(null,[Validators.required]),
    description : new FormControl(null,[Validators.required]),
    startDate : new FormControl(null,[Validators.required]),
    endDate : new FormControl(null,[Validators.required]),
    status : new FormControl(null,[Validators.required]),
  })

  constructor(private dialogRef:MatDialogRef<AddProjectDialogComponent>, private projectService:ProjectService) {}
  create(){
    this.projectService.createProject(this.projectForm.get('name')?.value, this.projectForm.get('description')?.value, this.projectForm.get('startDate')?.value, this.projectForm.get('endDate')?.value, this.projectForm.get('status')?.value);
    this.dialogRef.close();
  }

  close(){
    this.dialogRef.close();
  }
}
