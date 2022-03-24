import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly service: UserService
    ){}

    @Get("/")
    async getUser(): Promise<boolean> {
        const res = await this.service.get()
        return res;
    }
}
