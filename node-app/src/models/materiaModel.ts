
import { initDB } from "../config/dbConnection";
import { DataTypes, Model } from 'sequelize';

const db = initDB();
export class Materia extends Model { }

Materia.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    modelName: 'User',
  }
);



// Sincronizar el modelo con la base de datos
Materia.sync({ force: false })
  .then(() => {
    console.log('Modelo User sincronizado con la base de datos');
  })
  .catch((error) => {
    console.error('Error al sincronizar el modelo User:', error);
  });
