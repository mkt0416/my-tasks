
import { TaskModel } from "@/models/task";
import { connectDB } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

type Props = {
    params: {
        id: string;
    };
};

export async function GET(_: NextRequest, { params }: Props) {
    try {
        await connectDB();
        const task = await TaskModel.findById(params.id);
        if (!task) {
            return NextResponse.json({ message: 'タスクが存在しません' }, {
                status: 404,
            });
        }
        return NextResponse.json({ message: 'タスク取得成功', task }, {
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