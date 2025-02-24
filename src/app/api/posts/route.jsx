export async function GET() {
    return Response.json({
        posts
    })
}


export async function POST(request) {
    const body = await request.json();
    console.log(body)
    posts.push(body);

    return Response.json(posts);

}


export async function PUT(request) {
    const body = await request.json();
    const getIndex = posts.findIndex(p => p?.id === parseInt(body?.id));
    if (!getIndex) {
        return Response.json('Not Found')
    };

    posts[getIndex] = {
        id: body?.id,
        des: body?.des
    }

    return Response.json(posts)
}


const posts = [
    { id: 1, des: "Post 1" },
    { id: 2, des: "Post 2" },
    { id: 3, des: "Post 3" },
    { id: 4, des: "Post 4" },
    { id: 5, des: "Post 5" }
]