import * as bcrypt from "bcryptjs";

export class HashManager {
  public async hash(text: string): Promise<string> {
    const rounds = Number(process.env.ROUNDS);
    const salt = await bcrypt.genSalt(rounds);
    const cipherText = await bcrypt.hash(text, salt);
    return cipherText;
  }

  public async compare(s: string, hash: string): Promise<boolean> {
    const result = await bcrypt.compare(s, hash);
    return result;
  }
}
