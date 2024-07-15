import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PaginationqueryDto } from 'src/common/dto/paginationquery.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(@Query() paginationQuery: PaginationqueryDto): string {
    return 'get all cats';
  }

  @Get(':email')
  getUser(@Param('email') email: string) {
    return { email };
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return {};
  }

  @Patch(':email')
  update(@Param('email') email: string, @Body() updateUser: UpdateUserDto) {
    return {};
  }

  @Delete(':email')
  remove(@Param('email') email: string) {
    return {};
  }
}
