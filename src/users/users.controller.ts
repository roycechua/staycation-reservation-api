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
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { hashPassword } from 'helpers';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers(
    @Query() paginationQuery: PaginationqueryDto,
  ): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Get(':email')
  async getUser(@Param('email') email: string): Promise<User> {
    return this.usersService.getUser(email);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await hashPassword(createUserDto.password);
    return this.usersService.create({
      ...createUserDto,
      password: hashedPassword,
    });
  }

  @Patch(':email')
  async update(
    @Param('email') email: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<any> {
    return this.usersService.update(email);
  }

  @Delete(':email')
  async remove(@Param('email') email: string): Promise<any> {
    return this.usersService.remove(email);
  }
}
