module.exports=(sequelize,DataTypes)=>{
    const User = sequelize.define("User",{
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
        username:{
            type:DataTypes.STRING,
        },
        firstPassword:{
            type:DataTypes.STRING
        },
        newPassword:{
            type:DataTypes.STRING
        }

    })
    User.associate=models=>{
        User.hasMany(models.Reponse,{
            onDelete:'cascade'
        })
        User.belongsTo(models.Role,{
            onDelete:'cascade'
        })
        User.hasOne(models.Adherent,{
            onDelete:'cascade'
        })
    }
    return User;
}
