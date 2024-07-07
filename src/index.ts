import { Request, Response, route } from './httpSupport'

async function POST(req: Request): Promise<Response> {
    let posts = (await req.json()).posts;

    /* 


    write your code here
    
    
    */

    return new Response(JSON.stringify(posts));
}

/*

posts = [
    {
        id: integer,
        content: string,
        author: string,
        like: array of string, // wallet addresses which liked the post,
        hashtags: array of string,
    }
] // array of objects

*/

/* example algorithm which sort posts according to the number of likes

async function POST(req: Request): Promise<Response> {
    let posts = (await req.json()).posts;

    for (let i = 0; i < posts.length-1; i++) {
        if (posts[i].like.length < posts[i+1].like.length) {
            let temp = posts[i];
            posts[i] = posts[i+1];
            posts[i+1] = temp;
        }
    }

    return new Response(JSON.stringify(posts));
}
    
*/

export default async function main(request: string) {
    return await route({ POST }, request)
}
