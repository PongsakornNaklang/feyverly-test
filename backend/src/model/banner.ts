import { DataTypes, Model, Sequelize } from 'sequelize';

class Banner extends Model {
    public id!: number;
    public title!: string;
    public image!: string;
    public link!: string;
    public status!: string;

    static initialize(sequelize: Sequelize) {
        return this.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                title: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                image: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                link: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                status: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
            },
            {
                sequelize,
                modelName: 'Banner',
                tableName: 'banners',
            }
        );
    }
}

export default Banner;