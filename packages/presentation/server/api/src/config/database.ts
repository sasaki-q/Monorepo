import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "@demo/orm/src"

export const ormConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'test.cv7rlmmgw3kh.ap-northeast-1.rds.amazonaws.com',
    port: 5432,
    username: 'test',
    password: 'testtest',
    database: 'test',
    entities: [User],
    synchronize: true,
}