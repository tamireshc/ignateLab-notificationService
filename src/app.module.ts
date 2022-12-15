import { Module } from '@nestjs/common';
import { HttpModule } from './infra/http/http.module';
import { DatabaseModule } from './infra/database/database.module';

@Module({
  imports: [HttpModule, DatabaseModule],
  // providers: [
  //   PrismaService,
  // {
  //   provide: MailService,
  //   useClass: SMTPMailService, se for a partir de uma classe abstrata
  // },
  // ],
})
export class AppModule {}
