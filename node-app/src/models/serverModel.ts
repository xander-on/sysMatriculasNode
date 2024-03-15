import express, { Application } from 'express';
import { envs } from '../config/envs';
import cors from 'cors';
import { materiasRouter } from '../routes';
import { testConnection } from '../config/dbConnection';


export class Server {

  private domain:string = envs.APP_DOMAIN;
  private urlBase:string = envs.URL_BASE;

  private port:number = envs.APP_PORT;
  private app:Application;

  private urlAPI:string  = `${this.domain}:${this.port}${this.urlBase}`;

  private apiPaths = {
    materias: `${this.urlBase}/materias`,
  }

  constructor(){
    this.app = express();
    this.dbConnection();
    this.middlewares();
    this.routes();
  }


  async dbConnection(){
    await testConnection();
  }


  middlewares(){

    this.app.use( cors() );

    this.app.use(express.json());
  }


  routes(){
    this.app.use( this.apiPaths.materias, materiasRouter  );
  }

  listen(){
    this.app.listen( this.port, () => {
      console.log(`Servidor corriendo en: ${this.urlAPI}` );
    });
  }

}
