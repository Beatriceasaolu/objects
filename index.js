// question one
function InstagramPost(handle, content, imagelink, views, likes){
    this.handle = handle;
    this.content = content;
    this.imagelink = imagelink;
    this.views = views;
    this.likes = likes;
}


// question two
var Instagram1 = new InstagramPost();
var Instagram2 = new InstagramPost();


// question three
// factory method


// question four
// ways to clone an objects in javascript
const food = {beef:'🥩', bacon:'🥓'}
1. using spread method.
{...food}

2. using JSON.
JSON.parse(JSON.stringify(food))

3. using Object.assign.
object.assign({}, food)


// question five
//enumeration in javascript
