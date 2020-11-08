import * as path from 'path'
import {TypeOrmModuleOptions} from '@nestjs/typeorm';

export const config : TypeOrmModuleOptions = {
    type: 'postgres',
    username: 'postgres',
    password: 'postgres',
    port:  5432,
    host: '172.17.0.2',
    database: 'nestpostgres',
    entities: [path.resolve(__dirname,  '..', 'db', 'models', '*')],
    migrations: [path.resolve(__dirname,  '..', 'db', 'migrations', '*')]
};

module.exports = config;

