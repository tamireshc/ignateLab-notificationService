import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { PrismaService } from '../../database/prisma/prisma.service';
import { SendNotification } from 'src/application/use-cases/send-notification';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}
  // @Get()
  // list() {
  //   return this.prisma.notification.findMany();
  // }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    console.log(body);
    const { recipientId, content, category } = body;
    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return { notification };
  }
}
