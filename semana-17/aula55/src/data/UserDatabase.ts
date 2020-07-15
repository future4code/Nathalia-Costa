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
  };
  public async getUserByEmail(email: string): Promise<any>{
    
    try {
      const result =  await this.connection
      .select("*")
      .from(this.USER_TABLE)
      .where({email});

      return result[0];

    } catch (err) {
      throw new Error(err.sqlMessage || err.message) 
    }
  }
  public async getUserById(id: string): Promise<any>{
    const result = await this.connection
      .select("*")
      .from(this.USER_TABLE)
      .where({id});

    return result[0]
  }
}