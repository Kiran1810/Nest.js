import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilterModule } from './filter/filter.module';
import { PrismaModule } from './prisma/prisma.module';
import { PersonModule } from './person/person.module';
//import { PersonService } from './person/person.service'
//import { PersonController} from './person/person.controller'

@Module({
  imports: [FilterModule, PrismaModule, PersonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
