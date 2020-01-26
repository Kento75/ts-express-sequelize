import {Sequelize, Model, DataTypes, BuildOptions} from 'sequelize';
import {database} from '../config/database';

// interface
export interface NodeInterface {
  name: string;
}

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

// 起動するたびにテーブルを作成し直す設定
Node.sync({force: true}).then((): void => console.log('Node table created'));
