import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Person } from '.prisma/client';

@Injectable()
export class PersonService {
    constructor(private readonly prismaService: PrismaService) {}

    async create(CreatePersonDto: any): Promise<Person> {
        try {
            const createdPerson = await this.prismaService.person.create({
                data: CreatePersonDto
            });
            return createdPerson;
            
        } catch (error) {
            throw new Error('Failed to create person profile: ' + error.message);
        }
    }

    async findById(id: number): Promise<Person> {
        const person = await this.prismaService.person.findUnique({
            where: { id:id}
        });

        if (!person) {
            throw new NotFoundException(`Person profile with ID ${id} not found.`);
        }
        return person;
    }

    async findAll() {
        return await this.prismaService.person.findMany()
        
    }
    
}
