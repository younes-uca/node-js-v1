module.exports=(sequelize,DataTypes)=>{
    const Reservation = sequelize.define("Reservation",{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        dateArrive:{
            type:DataTypes.DATE,
            isDate: true
        },
        dateDepart:{
            type:DataTypes.DATE,
            isDate: true
        },
        nombrePersonne:{
            type:DataTypes.INTEGER
        },
        status:{
            type:DataTypes.STRING
        },
    })
    Reservation.associate=models=>{
        Reservation.belongsTo(models.Adherent,{
            onDelete:'cascade'
        })
        Reservation.belongsTo(models.Logement,{
            onDelete:'cascade'
        })
    }
    return Reservation;
}
