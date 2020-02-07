import { NotificationMessage } from './Notification';

export class User {
  username: string;
  firstName: string;
  lastName: string;
  projectsAssigned: string[];
  notifications: NotificationMessage[];
  // TODO: preferences
}
