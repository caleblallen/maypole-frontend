import { Project } from './Project';
import { Attachment } from './Attachment';
import { User } from './User';

export class Task {
  id: string;
  story: string;
  action: string[];
  progress: number;
  submitted: Date;
  due: Date;
  projectIds: string[];
  attachments: Attachment[];
  assignedTo: User[];
}
