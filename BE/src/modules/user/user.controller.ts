import { Body, Controller, Post } from '@nestjs/common';
import { VLogin } from 'global/user/dto/login.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  async login(@Body() body: VLogin) {
    return this.userService.login(body);
  }
}
