import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "@demo/orm/lib/user"

export const ormConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'test',
    entities: [User],
    synchronize: true,
}