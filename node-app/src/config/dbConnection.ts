import { Sequelize } from 'sequelize';
import { envs } from './envs';

export const initDB = () => {
    const dbHost = envs.DB_HOST;
    const dbName = envs.DB_NAME;
    const dbUser = 'root';
    const dbPass = envs.DB_PASSWORD;


    return new Sequelize(dbName!, dbUser!, dbPass, {
        host   :dbHost,
        dialect: 'mysql'
    });
}

export const testConnection = async() => {
    try {
      const db = initDB();
      await db.authenticate();
      console.log('Conexión exitosa a la base de datos');
    } catch (error) {
      console.log(error)
    }
}
