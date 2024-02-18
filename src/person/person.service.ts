import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Person } from '.prisma/client';

@Injectable()
export class PersonService {
    constructor(private readonly prismaService: PrismaService) {}

    async create(dto: CreatePersonDto): Promise<Person> {
        try {
            // Create the person profile using the provided DTO
            const createdPerson = await this.prismaService.person.create({
                data: dto
                
            });

            return createdPerson;
            console.log(createdPerson);
            
        } catch (error) {
            // Handle any errors that occur during the creation process
            // For example, if a database constraint is violated
            throw new Error('Failed to create person profile: ' + error.message);
        }
    }

    async findById(id: number): Promise<Person> {
        // Find a person profile by ID
        const person = await this.prismaService.person.findUnique({
            where: { id }
        });

        // If no person profile found, throw a NotFoundException
        if (!person) {
            throw new NotFoundException(`Person profile with ID ${id} not found.`);
        }

        return person;
    }

    // Add more methods as needed (e.g., update, delete, findAll)
}
