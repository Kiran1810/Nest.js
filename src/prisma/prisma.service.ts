import { INestApplication, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor(){
        super({
            datasources:{
                db:{
                    url:'postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public'
                },
            },
        });
    }
}