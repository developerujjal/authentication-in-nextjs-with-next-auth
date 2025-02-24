export async function PUT(request, { params }) {
    const body = await request.json();

    const { id } = await params;
    console.log(id);

    const getIndex = posts.findIndex(p => p.id === parseInt(id));

    posts[getIndex] = {
        id: body?.id,
        des: body?.des
    }

    return Response.json(posts)
}


export async function DELETE(request, { params }) {
    const { id } = await params;
    const exsitPost = posts.filter(p => p?.id !== parseInt(id));

    return Response.json(exsitPost)
}


const posts = [
    { id: 1, des: "Post 1" },
    { id: 2, des: "Post 2" },
    { id: 3, des: "Post 3" },
    { id: 4, des: "Post 4" },
    { id: 5, des: "Post 5" }
]