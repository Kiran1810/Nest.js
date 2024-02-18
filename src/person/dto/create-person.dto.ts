import { IsArray, IsString ,ArrayMinSize,IsInt,IsEnum} from "class-validator"
import { ApiProperty } from '@nestjs/swagger';


enum FilterType {
    'checkbox' = 'checkbox',
    'radio' = 'radio'
}
export class CreatePersonDto{

@ApiProperty()
@IsInt()
  id: number 
  @ApiProperty()  
  @IsString()  
  name: string

  @ApiProperty()
  @IsString()
  contact: string

  @ApiProperty()
  @IsString()
  experience: string

  @ApiProperty()
  @IsArray()
  @IsString({each:true})
  readonly skills: string[]

  @ApiProperty()
  @IsArray()
  @IsString({each:true})
  readonly specializations: string[]

  @ApiProperty()
  @IsString()
  references: string

  @ApiProperty()
  @IsString()
  availability: string
  
  @ApiProperty()
  @IsString()
  personalityTraits: string

  @ApiProperty()
  @IsString()
  additionalInformation: string
}

