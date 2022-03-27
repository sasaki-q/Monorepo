import { User } from '@demo/orm/lib/user';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepo: Repository<User>
    ){}

    async get(): Promise<boolean> {
        try{
            const userInfo = await this.userRepo.find();
            return true;
        }catch(err){
            console.log("DEBUG error message === ", err)
            throw new InternalServerErrorException()
        }
    }
}
