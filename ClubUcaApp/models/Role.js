module.exports=(sequelize,DataTypes)=>{
    const Role = sequelize.define("Role",{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    Role.associate=models=>{
        Role.hasMany(models.User,{
            onDelete:'cascade'
        })
    }
    return Role;
}
