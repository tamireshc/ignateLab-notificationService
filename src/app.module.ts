import { Module } from '@nestjs/common';
import { AppController } from './infra/app.controller';
import { PrismaService } from './infra/prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    // {
    //   provide: MailService,
    //   useClass: SMTPMailService, se for a partir de uma classe abstrata
    // },
  ],
})
export class AppModule { }
