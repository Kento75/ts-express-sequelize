import {Model, DataTypes} from 'sequelize';
import {database} from '../config/database';

export interface BookInterface {
  name: string;
  userId: number;
}

export class Book extends Model {
  public id!: number;
  public userId!: number;
  public name!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    name: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: 'books',
    sequelize: database,
  }
);

// 起動するたびにテーブルを作成し直す設定
Book.sync({force: true}).then((): void => console.log('Book table created'));
