import mysql from "mysql2/promise"

const db = mysql.createPool({
    user:"root",
    host:"localhost",
    database:"dripstore",
    password:"2609",
    port:"3000"
})

export default db