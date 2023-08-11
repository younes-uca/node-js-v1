module.exports=(sequelize,DataTypes)=>{
    const Reponse = sequelize.define("Reponse",{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        contenu:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        dateCreation: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        dateModification: {
            type: DataTypes.DATE,
        },
        likes:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    });
    Reponse.beforeUpdate((reponse) => {
        reponse.dateModification = new Date();
    });
    Reponse.associate=models=>{
        Reponse.belongsTo(models.User,{
            onDelete:'cascade'
        })
    }
    return Reponse;
}
