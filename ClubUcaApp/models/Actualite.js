module.exports=(sequelize,DataTypes)=>{
    const Actualite = sequelize.define('Actualite',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    })
    Actualite.associate=models=>{
        Actualite.hasMany(models.Adherent,{
            onDelete:'cascade'
        })
    }
    return Actualite;
}