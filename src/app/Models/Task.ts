import { Project } from './Project';
import { Attachment } from './Attachment';

export class Task {
  id: string;
  story: string;
  action: string[];
  progress: number;
  submitted: Date;
  due: Date;
  projects: Project[];
  attachments: Attachment[];
}
