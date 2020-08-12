const mongoose= require('mongoose')

const connectDB = async () => {
    try{
         const conn = await mongoose.connect(process.env.MONGO_URI,{
           //to stop some warning in the console
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify: false
         })

         console.log(`MOngo db connected: ${conn.connection.host}`)
    }
    catch(err){
       console.error(err)
       process.exit(1)
    }
}

module.exports=connectDB