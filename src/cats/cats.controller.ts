import { Body, Controller, Get, Param, Post, UsePipes } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { JoiValidationPipe } from 'src/pipes/joi-validation.pipe';
import { createCatSchema } from './validationSchema/create-cat.schema';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Get(':id')
    async findOne(@Param() params): Promise<string> {
        console.log(params.id);
        return `This action returns a #${params.id} cat`;
    }

    @Post()
    @UsePipes(new JoiValidationPipe(createCatSchema))
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }
}