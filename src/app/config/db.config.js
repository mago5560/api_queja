module.exports={
    HOST:"ec2-44-194-6-121.compute-1.amazonaws.com",
    USER:"hgxshzhmjkdrfv",
    PASSWORD:"cba435b77e272dbbb958c1b05c254b1fd3b5903fb2636ab6fc593b15167b5d7c",
    DB: "d37hs92uiui5fp",
    dialect: "postgres",
    pool: {
        max:10,
        min:0,
        acquire:30000,
        idle:10000
    }
    /*
    //Local
    HOST:"localhost",
    USER:"postgres",
    PASSWORD:"1234",
    DB: "angelDB",
    dialect: "postgres",
    pool: {
        max:10,
        min:0,
        acquire:30000,
        idle:10000
    }*/
};