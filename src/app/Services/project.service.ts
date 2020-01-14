import { Injectable } from '@angular/core';
import { Project } from '../Models/Project';

@Injectable({
  providedIn: 'root'
})

class ProjectEntry {
  [id: string]: Project;
}

export class ProjectService {
  private projects: ProjectEntry;
  private activeProjectId: string;
  constructor() {
    this.projects = {
      ErsUl7peDIYmgS0q6Di7JYukj8fkZPlizIZereMEFyTjbXTakWRXbKNFlrzHnhB: {
        id: 'ErsUl7peDIYmgS0q6Di7JYukj8fkZPlizIZereMEFyTjbXTakWRXbKNFlrzHnhB',
        name: 'Death Star Construction',
        tasks: null
      }
    };
    this.activeProjectId = 'ErsUl7peDIYmgS0q6Di7JYukj8fkZPlizIZereMEFyTjbXTakWRXbKNFlrzHnhB';
  }

  public getProject(id: string): Project {
    // TODO: Return a deep copy?
    return this.projects[id];
  }

  public getActiveProjectId(): string {
    return this.activeProjectId;
  }

  public getActiveProject(): Project {
    return this.getProject( this.getActiveProjectId() );
  }
}
