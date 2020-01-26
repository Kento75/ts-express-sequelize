import {Sequelize, Model, DataTypes, BuildOptions} from 'sequelize';
import {database} from '../config/database';

// entity
export class Node extends Model {
  public id!: number;
  public name!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// schema
Node.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: 'nodes',
    sequelize: database,
  }
);

Node.sync({force: true}).then((): void => console.log('Node table created'));
