import { NextResponse } from "next/server"

export async function GET(request, context) {
    console.log(context.params.id)
    return NextResponse.json("hello")
}
/*バックエンドでURLのパラメーターを取得したい時
context.params.idを使って書く*/