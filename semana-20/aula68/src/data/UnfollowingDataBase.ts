import { BaseDatabase } from "./BaseDatabase";

export class UnfollowingDataBase extends BaseDatabase {
  public async unfollow(userId: string, followingId: string): Promise<void> {
    await this.getConnection()
    .delete() 
    .from("Following")
    .where({user_id: userId, following_id: followingId});
  }
}