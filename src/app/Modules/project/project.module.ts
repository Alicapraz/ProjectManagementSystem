import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AddProjectDialogComponent } from './add-project-dialog/add-project-dialog.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import {MatCardModule} from '@angular/material/card';
import { TaskAddDialogComponent } from './task-add-dialog/task-add-dialog.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ProjectEditDialogComponent } from './project-edit-dialog/project-edit-dialog.component';



@NgModule({
  declarations: [
    ProjectListComponent,
    AddProjectDialogComponent,
    ProjectDetailComponent,
    TaskAddDialogComponent,
    ProjectEditDialogComponent,

    
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MatButtonModule,
    MatPaginator,
    MatPaginatorModule,
    MatIconModule,
    RouterLink,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatToolbarModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule
  ]
})
export class ProjectModule { }
