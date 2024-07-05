import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';


const routes: Routes = [
  // {
  //   path:'', pathMatch:'full', redirectTo: 'projects/list'
  // },
  {
    path : 'list', component:ProjectListComponent
  },
  {path:'project-tasks/:projectIndex', component: ProjectDetailComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
