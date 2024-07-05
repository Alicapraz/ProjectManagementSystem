import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  public projects: Array<any> = [];
  constructor() { 
    let str = localStorage.getItem('projects');
    if(str != null)
    {
      this.projects = JSON.parse(str);
    }
  }

  public createProject(name:any, description:any, startDate:any, endDate:any, status:any){
    let newProjectObj = {
      name:name,
      description:description,
      startDate:startDate,
      endDate:endDate,
      status:status,
      cards:[]
    }
    this.projects.push(newProjectObj);
    localStorage.setItem('projects', JSON.stringify(this.projects));
  }

  public updateDataToLocalStorage(){
    localStorage.setItem('projects', JSON.stringify(this.projects));
  }

  public deleteProject(projectNumber: number){
    this.projects.splice(projectNumber,1);
    localStorage.setItem('projects', JSON.stringify(this.projects));

  }
}
