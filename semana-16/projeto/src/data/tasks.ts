import { db } from './dataSetup';
import moment from "moment";
import { usersTable } from "./users";

const tasksTable = "ToDoListTasks";

export const createTask = async(
    title: string,
    description: string,
    limitDate: moment.Moment,
    creatorUserId: string
): Promise<void> => {
    const id = new Date().getTime();
    await db()
    .insert({
        id, 
        title, 
        description,
        limit_date: limitDate.format("YYYY-MM-DD"),
        creator_user_id: creatorUserId
    }).into(tasksTable)
};
export const getTasksById = async (id: string): Promise<any> => {
    const result = await db()
    .raw(`
    t.id as taskId,
    t.title,
    t.description,
    t.limit_date as limitDate,
    t.status,
    u.id as creatosUserId,
    u.nickname as creatorUserNickname
    FROM ${usersTable} t
    LEFT JOIN u ON u.id = t.creator_user_id
    WHERE t.id = '${id}'
    `)
    return result[0][0]
};