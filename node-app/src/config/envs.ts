import 'dotenv/config';
import { get } from 'env-var';


export const envs = {
  APP_PORT    : get('APP_PORT').required().asPortNumber(),
  APP_DOMAIN  : get('APP_DOMAIN').required().asString(),
  URL_BASE    : get('URL_BASE').required().asString(),

  DB_HOST     : get('DB_HOST').asString(),
  DB_NAME     : get('MYSQLDB_DATABASE').asString(),
  DB_USER     : get('DB_USERNAME').asString(),
  DB_PASSWORD : get('DB_PASSWORD').asString(),
}
