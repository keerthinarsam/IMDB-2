const Pool=require("pg").Pool;
const pool=new Pool({
    user:"postgres",
    password:"keerthisai",
    host:"localhost",
    port:"5432",
    database:"imdb"
});
module.exports=pool;