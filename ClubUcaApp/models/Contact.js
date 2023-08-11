module.exports = (sequelize,DataTypes)=>{
    const Contact = sequelize.define("Contact",{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        nom: {
            type: DataTypes.STRING,
        },
        prenom: {
            type: DataTypes.STRING,
        },
        numeroTelephone: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        question: {
            type: DataTypes.STRING,
        }
    })
    Contact.associate=models=>{
        Contact.hasOne(models.Response,{
            onDelete:'cascade'
        })
    }

    return Contact
}