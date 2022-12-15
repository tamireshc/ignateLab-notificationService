import { Notification } from 'src/application/entities/notification';
import { NotificationRepository } from 'src/application/repositories/notifications-repositoriy';

export class inMemoryNotificationRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
    console.log(notification);
  }
}
