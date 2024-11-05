import { Controller, Post, Body } from '@nestjs/common';
import { DatabaseService } from './turso.service';

@Controller('/register')
export class RegistrationController {
    constructor(private readonly databaseService: DatabaseService) {}

    @Post()
    async registerUser(
        @Body('username') username: string,
        @Body('email') email: string,
        @Body('password') password: string,
    ) {
        await this.databaseService.saveUser(username, email, password);
        return { message: 'User registered successfully' };
    }
}
