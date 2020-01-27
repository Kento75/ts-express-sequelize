import {Model, DataTypes} from 'sequelize';
import {database} from '../config/database';
import {Book} from './bookModel';

// interface
export interface UserInterface {
  name: string;
}

// entity
export class User extends Model {
  public id!: number;
  public name!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// schema
User.init(
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
    tableName: 'users',
    sequelize: database,
  }
);

// リレーション
// 1 : n
User.hasMany(Book, {
  sourceKey: 'id',
  foreignKey: 'userId',
});

// 起動するたびにテーブルを作成し直す設定
User.sync({force: true}).then((): void => console.log('User table created'));
