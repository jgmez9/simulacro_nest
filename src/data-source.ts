import 'dotenv/config';

import { DataSource } from 'typeorm';
import { envSchema } from './config/env.config.js';
import { Cotizacion } from './cotizacion/entities/cotizacion.entity.js';

const env = envSchema.parse(process.env);

const AppDataSource = new DataSource({
  type: 'postgres',
  host: env.DB_HOST,
  port: env.DB_PORT,
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_DATABASE,

  entities: [Cotizacion],
  migrations: ['src/migrations/*{.ts,.js}'],

  synchronize: false,
});

export default AppDataSource;