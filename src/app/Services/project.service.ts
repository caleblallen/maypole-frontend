import { Injectable } from '@angular/core';
import { Project } from '../Models/Project';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})

class ProjectEntry {
  [id: string]: Project;
}

@Injectable()
export class ProjectService {
  private projects: ProjectEntry;
  private activeProjectId: string;
  constructor() {
    const tempUser1: User = {
      username: 'TinyDragonDev',
      firstName: 'Caleb',
      lastName: 'Allen',
      projectsAssigned: ['ErsUl7peDIYmgS0q6Di7JYukj8fkZPlizIZereMEFyTjbXTakWRXbKNFlrzHnhB'],
      notifications: null
    };

    const tempUser2: User = {
      username: 'elf_lord',
      firstName: 'John',
      lastName: 'Doe',
      projectsAssigned: ['ErsUl7peDIYmgS0q6Di7JYukj8fkZPlizIZereMEFyTjbXTakWRXbKNFlrzHnhB'],
      notifications: null
    };

    // TODO: Go grab active project from NodeJS.
    this.projects = {
      ErsUl7peDIYmgS0q6Di7JYukj8fkZPlizIZereMEFyTjbXTakWRXbKNFlrzHnhB: {
        id: 'ErsUl7peDIYmgS0q6Di7JYukj8fkZPlizIZereMEFyTjbXTakWRXbKNFlrzHnhB',
        name: 'maypole development',
        tasks: [
          {
            id: '1',
            story: 'I would like to view all tickets for a project so that I can gain a top level sense of project status',
            action: ['added feature to roadmap', 'added to priority list'],
            progress: 10,
            submitted: new Date(2020, 2, 7, 9, 39, 30, 451),
            due: new Date(2020, 2, 10, 12, 0, 0, 451),
            projectIds: ['ErsUl7peDIYmgS0q6Di7JYukj8fkZPlizIZereMEFyTjbXTakWRXbKNFlrzHnhB'],
            attachments: null,
            assignedTo: [tempUser1]
          },
          {
            id: '2',
            story: 'I would like to list the user assigned to a ticket so I can verify user ticket ownership',
            action: ['added feature to roadmap'],
            progress: 0,
            submitted: new Date(2020, 2, 7, 9, 39, 30, 451),
            due: new Date(2020, 2, 10, 12, 0, 0, 451),
            projectIds: ['ErsUl7peDIYmgS0q6Di7JYukj8fkZPlizIZereMEFyTjbXTakWRXbKNFlrzHnhB'],
            attachments: null,
            assignedTo: [tempUser1, tempUser2]
          }
        ]
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
