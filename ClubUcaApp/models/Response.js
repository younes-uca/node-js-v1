module.exports = (sequelize,Datatypes) => {
    const Response = sequelize.define("Response",{
        id:{
            type:Datatypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        content: {
            type: Datatypes.STRING,
        },
    })
    Response.associate=models=>{
        Response.belongsTo(models.Contact,{
            onDelete:'cascade'
        })
    }
    return Response;
}