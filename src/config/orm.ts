import * as path from 'path'
import {TypeOrmModuleOptions} from '@nestjs/typeorm';

const options : TypeOrmModuleOptions = {
    type: "postgres",
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port:  5432,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,

    entities: [path.resolve(__dirname,  '..', 'models', '*')],

    //diretorio onde as migrations vao ser lidas
    migrations: [path.resolve(__dirname,  '..', 'db', 'migrations', '*')],

    //diretorio que é criado as migrations
    cli : {
        migrationsDir: path.resolve(__dirname,  '..', 'db', 'migrations')  
   }
};

module.exports = options;

