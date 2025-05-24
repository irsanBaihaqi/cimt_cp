module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("Product", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        image_url: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        spec_image_url: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        tableName: 'products',
        timestamps: false
    });

    Product.associate = (models) => {
        Product.belongsTo(models.Category, {
            foreignKey: "category_id",
            as: "category"
        });
    };

    return Product;
};