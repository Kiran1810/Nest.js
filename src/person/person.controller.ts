import { Controller, Post, Body, Get, Param, NotFoundException } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { PersonService } from './person.service';
import { Person } from '.prisma/client';

@Controller('persons')
export class PersonController {
    constructor(private readonly personService: PersonService) {}

    @Post()
    async create(@Body() createPersonDto: CreatePersonDto): Promise<Person> {
        try {
            const createdPerson = await this.personService.create(createPersonDto);
            return createdPerson;
        } catch (error) {
            // Handle any errors that occurred during the creation process
            throw error; // You might want to customize the error handling here
        }
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Person> {
        try {
            const person = await this.personService.findById(Number(id));
            return person;
        } catch (error) {
            // If PersonService throws a NotFoundException, throw a NotFoundException
            if (error instanceof NotFoundException) {
                throw error;
            }
            // Handle other potential errors here
            throw error; // You might want to customize the error handling here
        }
    }
}
