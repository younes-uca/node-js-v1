module.exports=(sequelize,DataTypes)=>{
    const Adherent = sequelize.define("Adherent",{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        numero:{
            type:DataTypes.INTEGER,
            allowNull:false,
            isNumeric: true
        },
        prenom:{
            type:DataTypes.STRING
        },
        nom:{
            type:DataTypes.STRING
        },
        email:{
            type:DataTypes.STRING,
            isEmail: true
        },
        dateNaissance:{
            type:DataTypes.DATE,
            isDate: true
        },
        dateAbonnement:{
            type:DataTypes.DATE,
            isDate: true
        },
        dateCotisation:{
            type:DataTypes.DATE,
            isDate: true
        },
        conjoint:{
            type:DataTypes.STRING
        },
        etablissement:{
            type:DataTypes.STRING
        },
        etatMatrimonial:{
            type:DataTypes.STRING
        },
        profession:{
            type:DataTypes.STRING
        },
        cin:{
            type:DataTypes.STRING
        },
        nbrEnfants:{
            type:DataTypes.INTEGER
        },
        teleFixe:{
            type:DataTypes.STRING
        },
        teleB:{
            type:DataTypes.STRING
        },
        teleA:{
            type:DataTypes.STRING
        },
        genre:{
            type:DataTypes.STRING
        },
        adresse:{
            type:DataTypes.STRING
        }
    })
    Adherent.associate=models=>{
        Adherent.belongsTo(models.User,{
            onDelete:'cascade'
        })
        Adherent.hasMany(models.Reservation,{
            onDelete:'cascade'
        })
        Adherent.belongsTo(models.Actualite,{
            onDelete:'cascade'
        })
    }
    return Adherent;
}
