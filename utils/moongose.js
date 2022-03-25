import { connect, connection } from 'mongoose'

const conn = {
    isConnected: false
}

export async function dbConnect() {
    if (conn.isConnected) return;

    const db = await connect("mongodb://localhost/locationAccess");
    conn.isConnected = db.connections[0].readyState;

    console.log(db.connection.db.databaseName)
}

connection.on("connected", () => {
    console.log("MongoDB connected to our database")
})

connection.on("error", (error) => {
    console.log("MongoDB not connected to our database")
})