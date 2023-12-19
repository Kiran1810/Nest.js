import { IsArray, IsBoolean, IsEnum, IsString } from "class-validator"
import { ApiProperty } from '@nestjs/swagger';

enum FilterType {
    'checkbox' = 'checkbox',
    'radio' = 'radio'
}

export class CreateFilterDto {

    @ApiProperty()
    @IsString()
    name: string

    @ApiProperty()
    @IsBoolean()
    open: boolean

    @ApiProperty()
    @IsEnum(FilterType)
    type: FilterType

    @ApiProperty()
    @IsArray()
    options: JSON[]
}
