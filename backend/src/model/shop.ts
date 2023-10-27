import { DataTypes, Model, Sequelize } from 'sequelize';

class Shop extends Model {
    public id!: number;
    public name!: string;
    public lat!: number;
    public lng!: number;

    static initialize(sequelize: Sequelize) {
        return this.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lat: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            lng: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
        }, { sequelize, modelName: 'Shop', tableName: 'shops' });
    }
}

export default Shop;