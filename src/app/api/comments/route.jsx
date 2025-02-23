

export async function POST(request) {
    const res = await request.json();
    comments.push({
        id: res?.id,
        des: res?.des
    })

    return Response.json({
        message: 'successfully',
        comments
    })

}



const comments = [
    {
        id: 1,
        des: 'hwllo there'
    },
    {
        id: 2,
        des: 'hwllo there'
    },
    {
        id: 3,
        des: 'hwllo there'
    }
]