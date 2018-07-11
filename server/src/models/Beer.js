module.exports = (sequelize, DataTypes) => {
    const Beer = sequelize.define('Beer', {
        brand: DataTypes.STRING,
        abv: DataTypes.STRING,
        review: DataTypes.STRING,
        imageUrl: DataTypes.STRING,
        youtubeId: DataTypes.STRING
    })

    return Beer
}