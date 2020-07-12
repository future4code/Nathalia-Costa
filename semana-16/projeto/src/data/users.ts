import { db } from "./dataSetup";

const usersTable = "ToDoListUsers";

export const createUser = async (
    name: string, 
    nickname: string, 
    email: string
    ): Promise<void> => {
    const id = (new Date()).getTime()
    await db()
        .insert({
            id: id.toString(),
            name,
            nickname,
            email
        })
        .into(usersTable)
};

