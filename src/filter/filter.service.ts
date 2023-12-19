import { Injectable } from '@nestjs/common';
import { CreateFilterDto } from './dto/create-filter.dto';
import { UpdateFilterDto } from './dto/update-filter.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FilterService {
  constructor(private readonly prismaService: PrismaService){}

  async create(createFilterDto: any) {
    const filter = await this.prismaService.filter.create({
      data: createFilterDto
    })

    return filter
  }

  async findAll() {
    return await this.prismaService.filter.findMany()
  }

  async findOne(id: number) {
    return await this.prismaService.filter.findUnique({
      where: {
        id: id
      }
    })
  }

  async update(id: number, updateFilterDto: any) {
    return await this.prismaService.filter.update({
      where: {
        id: id
      },
      data: updateFilterDto
    })
  }

  async remove(id: number) {
    return await this.prismaService.filter.delete({
      where: {
        id: id
      }
    })
  }
}
