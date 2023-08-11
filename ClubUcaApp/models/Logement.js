module.exports=(sequelize,DataTypes)=>{
    const Logement = sequelize.define("Logement",{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        nom:{
            type:DataTypes.STRING
        },
        prix:{
            type:DataTypes.DOUBLE
        },
        capacite:{
            type:DataTypes.INTEGER
        },
        nombreLogement: {
            type: DataTypes.INTEGER
        },
    })
    Logement.associate=models=>{
        Logement.hasMany(models.Reservation,{
            onDelete:'cascade'
        })
    }
    return Logement;
}

