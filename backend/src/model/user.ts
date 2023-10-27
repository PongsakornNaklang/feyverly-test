import { DataTypes, Model, Sequelize } from 'sequelize';

class User extends Model {
    public id!: string;
    public username!: string;
    public email!: string;
    public password!: string;

    static initialize(sequelize: Sequelize) {
        return this.init({
            id: {
                type: DataTypes.STRING,
                autoIncrement: true,
                primaryKey: true,
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        }, { sequelize, modelName: 'User', tableName: 'users' });
    }
}

export default User;