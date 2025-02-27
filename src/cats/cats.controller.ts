import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  Redirect,
  Req,
  Res,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCatDto, ListAllEntities, UpdateCatDto } from './dto';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    return 'cat adopted ' + createCatDto.name;
  }

  @Get()
  findAll(@Query() query: ListAllEntities): string {
    return 'Mya, Apollo and Chico ' + `limit:${query.limit ?? 0}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `cat number #${id}`;
  }

  @Put(':id')
  updateCat(@Body() updateCatDto: UpdateCatDto, @Param('id') id: string) {
    return `cat #${id} updated with sucess ` + updateCatDto.name;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `cat #${id} deleted`;
  }
}
