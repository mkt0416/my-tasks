
import { TaskModel } from "@/models/task";
import { connectDB } from "@/utils/database";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectDB();
        const allTasks = await TaskModel.find();
        return NextResponse.json({ message: 'タスク取得成功', tasks: allTasks }, {
            status: 200,
        });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ message: 'タスク取得失敗' }, {
            status: 500,
        });
    }
};

export const dynamic = 'force-dynamic';