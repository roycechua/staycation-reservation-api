import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getUser(email: string): Promise<User> {
    return await this.userRepository.findOne({ where: { email } });
  }

  async create(user: CreateUserDto) {
    try {
      return await this.userRepository.save(user);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async update(email: string) {
    return await this.userRepository.update({ email }, {});
  }

  async remove(email: string) {
    return await this.userRepository.delete({ email });
  }
}
