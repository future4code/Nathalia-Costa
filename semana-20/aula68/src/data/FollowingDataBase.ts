import { BaseDatabase } from "./BaseDatabase";

// Classe que estabelece a ligação com o banco de dados, especificamente a tabela following.
// Se você olhar a tabela, vai ver que ela tem duas foreign keys, que são o id do usuário,
// e o id de quem ele segue. Ambas fazem referências a ids dos usuários na tabalea Cookenu_Users.
// Essa fução simplesmente faz um insert de uma linha com os dois ids associados.
export class FollowingDataBase extends BaseDatabase {
  public async follow(user_id: string, following_id: string): Promise<void> {
    await this.getConnection().raw(`
    INSERT INTO Following VALUES ("${user_id}", "${following_id}")
    `);
  }
}
