import knex from "knex";

export class UserDatabase {

  private USER_TABLE = "User";
  private connection = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
  });

  public async createUser(
    id: string,
    email: string, 
    password: string
  ){
      try {
        
        await this.connection
        .insert({
          id,
          email,
          password
        })
        .into(this.USER_TABLE)

      } catch (err) {
        throw new Error(err.sqlMessage || err.message)  
      }
  }
}