/* //CALL BACKs---------------Task 5 Making the Registration Page Dynamic
const posts = [
    { title: 'Post one', body: 'This is post one',createdAt:new Date().getTime()},
    { title: 'Post two', body: 'This is post two',createdAt:new Date().getTime() },
    { title: 'Post three', body: 'This is post three',createdAt:new Date().getTime() },
    { title: 'Post four', body: 'This is post four',createdAt:new Date().getTime() }
]

function getPost() {
    setTimeout(() => {
        let output = '';
           for (let i=0; i < posts.length; i++) {
                   output+=`<li>${posts[i].title}--last updated  ${Math.floor(new Date().getTime()-posts[i].createdAt)/1000} Seconds ago</li>`
           }
        //posts.forEach((post,index)=>
        //{
           // output+=`<li>${post.title}--last updated  ${Math.floor(new Date().getTime()-post.createdAt)/1000} Seconds ago</li>`
       // }); 
        document.body.innerHTML = output;
    }, 1000)
}
function createPost(newpost,callback)
{
    setTimeout(()=>
    {
        posts.push({...newpost,createdAt: new Date().getTime()});
        callback();
    },400)
}

createPost({ title: 'Post five', body: 'This is post five',createdAt:new Date().getTime() },getPost)  

 */

//Promise---------------Task 5 Making the Registration Page Dynamic
/* const posts = [
    { title: 'Post one', body: 'This is post one', createdAt: new Date().getTime() },
    { title: 'Post two', body: 'This is post two', createdAt: new Date().getTime() },
    { title: 'Post three', body: 'This is post three', createdAt: new Date().getTime() },
    { title: 'Post four', body: 'This is post four', createdAt: new Date().getTime() }
]

function getPost() {
    setTimeout(() => {
        let output = '';
        for (let i = 0; i < posts.length; i++) {
            output += `<li>${posts[i].title}--last updated  ${Math.floor(new Date().getTime() - posts[i].createdAt) / 1000} Seconds ago</li>`
        }
        document.body.innerHTML = output;
    }, 1000)
}
function createPost(newpost) {
    return new Promise((resolve,reject)=>
    {
        setTimeout(() => {
            posts.push({ ...newpost, createdAt: new Date().getTime() });
            let error=false;
            //let error=true;//error msg can be seen in console when set to true
            if(!error)
            {
                resolve();
            }
            else
            {
                reject('Error:Something went wrong')
            }
        }, 400)
    })
}
createPost({ title: 'Post five', body: 'This is post five', createdAt: new Date().getTime() }).then(getPost)
//to look error message when set error to true in console use catch as below.
//createPost({ title: 'Post five', body: 'This is post five', createdAt: new Date().getTime() }).then(getPost).catch(err=>console.log(err))
 */
/* //Delete post
const posts = [
    { title: 'Post one', body: 'This is post one', createdAt: new Date().getTime() },
    { title: 'Post two', body: 'This is post two', createdAt: new Date().getTime() },
    { title: 'Post three', body: 'This is post three', createdAt: new Date().getTime() },
    { title: 'Post four', body: 'This is post four', createdAt: new Date().getTime() }
]

function getPost() {
    setTimeout(() => {
        let output = '';
        for (let i = 0; i < posts.length; i++) {
            output += `<li>${posts[i].title}--last updated  ${Math.floor(new Date().getTime() - posts[i].createdAt) / 1000} Seconds ago</li>`
        }
        document.body.innerHTML = output;
    }, 1000)
}
function createPost(newpost) {
    return new Promise((resolve,reject)=>
    {
        setTimeout(() => {
            posts.push({ ...newpost, createdAt: new Date().getTime() });
            let error=false;
            //let error=true;//error msg can be seen in console when set to true
            if(!error)
            {
                resolve();
            }
            else
            {
                reject('Error:Something went wrong')
            }
        }, 400)
    })
}
// createPost({ title: 'Post five', body: 'This is post five', createdAt: new Date().getTime() }).then(getPost) 
//to look error message when set error to true in console use catch as below.
//createPost({ title: 'Post five', body: 'This is post five', createdAt: new Date().getTime() }).then(getPost).catch(err=>console.log(err))

function deletePost()
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(() => {
            if(posts.length>0)
            {
                let oldpost=posts.pop()
                resolve(oldpost)
            }
            else
            {
                reject('Array is empty')
            }
        }, 2000)
    })
}
createPost({ title: 'Post five', body: 'This is post five', createdAt: new Date().getTime() }).then(getPost) 
getPost()
deletePost().then(()=>
{
    getPost()
    deletePost().then(()=>
    {
        getPost()
        deletePost().then(()=>
        {
            getPost()
            deletePost().then(()=>
            {
                getPost()
                deletePost().then(()=>
                {
                    getPost()
                    deletePost().then(()=>
                    {}).catch((err)=>
                    {
                       console.log('Inside Catch Block',err) 
                    })
                })
            })
        })
    })
}) */
/* //Promise All by youtuber
const posts = [
    { title: 'Post one', body: 'This is post one', createdAt: new Date().getTime() },
    { title: 'Post two', body: 'This is post two', createdAt: new Date().getTime() },
    { title: 'Post three', body: 'This is post three', createdAt: new Date().getTime() },
    { title: 'Post four', body: 'This is post four', createdAt: new Date().getTime() }
]

function getPost() {
    setTimeout(() => {
        let output = '';
        for (let i = 0; i < posts.length; i++) {
            output += `<li>${posts[i].title}--last updated  ${Math.floor(new Date().getTime() - posts[i].createdAt) / 1000} Seconds ago</li>`
        }
        document.body.innerHTML = output;
    }, 1000)
}
function createPost(newpost) {
    return new Promise((resolve,reject)=>
    {
        setTimeout(() => {
            posts.push({ ...newpost, createdAt: new Date().getTime() });
            let error=false;
            //let error=true;//error msg can be seen in console when set to true
            if(!error)
            {
                resolve();
            }
            else
            {
                reject('Error:Something went wrong')
            }
        }, 400)
    })
}
const promise1=Promise.resolve('hello world');
let promise2=10;
const promise3=new Promise((resolve,reject)=>
{
    setTimeout(resolve,2000,"bye")
});
Promise.all([promise1,promise2,promise3]).then(values=>console.log(values)) */

/* //Task Update useracivity by promise all.
const posts = [
    { title: 'Post one', body: 'This is post one', createdAt: new Date().getTime() },
    { title: 'Post two', body: 'This is post two', createdAt: new Date().getTime() },
    { title: 'Post three', body: 'This is post three', createdAt: new Date().getTime() },
    { title: 'Post four', body: 'This is post four', createdAt: new Date().getTime() }
]

function getPost() {
    setTimeout(() => {
        let output = '';
        for (let i = 0; i < posts.length; i++) {
            output += `<li>${posts[i].title}--last updated  ${Math.floor(new Date().getTime() - posts[i].createdAt) / 1000} Seconds ago</li>`
        }
        document.body.innerHTML = output;
    }, 1000)
}
function createPost(newpost) {
    return new Promise((resolve,reject)=>
    {
        setTimeout(() => {
            posts.push({ ...newpost, createdAt: new Date().getTime() });
            let error=false;
            //let error=true;//error msg can be seen in console when set to true
            if(!error)
            {
                resolve();
            }
            else
            {
                reject('Error:Something went wrong')
            }
        }, 1000)
    })
}
createPost({ title: 'Post five', body: 'This is post five', createdAt: new Date().getTime() }).then(getPost)
function updateLastUserActivityTime()
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(() => {
            user.lastactivity=new Date().getTime();
            resolve(user.lastactivity);
        }, 4000)
    })
}
function userupdatesPOst()
{
    Promise.all([createPost,updateLastUserActivityTime])
    .then(([createPostresolve,updateLastUserActivityTimeresolve])=>
    {
        console.log(updateLastUserActivityTimeresolve)
    })
    .catch(err=>console.log(err))
} */


//Async Await
//without using async
/* console.log('p1:shows ticket')
console.log('p2:shows ticket')
const wifebringsticket=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve()
    },3000)
})
//*******************for 1st task-wife brings ticket so they entered mall
wifebringsticket.then(()=>
{
    console.log('p3:shows ticket')
})
//*******************for second task -husbad made promise if she brins ticket he will give popcorn
const getpopCorn=wifebringsticket.then(()=>
{
    console.log('wife says i have tickets')
    console.log('husband says we can go')
    console.log('wife says i am hungry')
    return new Promise((resolve,reject)=>
    {
        resolve()
    })
})
// getpopCorn.then(()=>{
//     console.log('ticket')
// })
//********************now wife need butter on popcorn
const getButter=getpopCorn.then(()=>
{
    console.log('husband says i have popcorn')
    console.log('wife says i need butter on popcorn')
    return new Promise((resolve,reject)=>
    {
        resolve()
    })
})
getButter.then(()=>
{
    console.log('husband says anything more')
})
console.log('p4:shows ticket')
console.log('p5:shows ticket') */
//using async wait
/* console.log('p1:shows ticket')
console.log('p2:shows ticket')
const premovie=async()=>
{
    const wifebringsticket=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve('ticket')
    },3000)
});
const getpopCorn=new Promise((resolve,reject)=>(resolve('popcorn')))
const getButter=new Promise((resolve,reject)=>(resolve('butter')))
let ticket=await wifebringsticket;
    console.log('wife says i have tickets')
    console.log('husband says we can go')
    console.log('wife says i am hungry')
let popcorn=await getpopCorn;
    console.log('husband says i have popcorn')
    console.log('wife says i need butter on popcorn')
let butter=await getButter;
    console.log('husband says anything more')
return ticket;
}
premovie().then(()=>
{
    console.log('p3: shows ticket')
})
console.log('p4:shows ticket')
console.log('p5:shows ticket') */

//task async wait que 2 deliverable
/* console.log('p1:shows ticket')
console.log('p2:shows ticket')
const wifebringsticket=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve()
    },3000)
})
// popcorn
const getpopCorn=wifebringsticket.then(()=>
{
    console.log('wife says i have tickets')
    console.log('husband says we can go')
    console.log('wife says i am hungry')
    return new Promise((resolve,reject)=>
    {
        resolve()
    })
})
// butter on popcorn
const getButter=getpopCorn.then(()=>
{
    console.log('husband says i have popcorn')
    console.log('wife says i need butter on popcorn')
    return new Promise((resolve,reject)=>
    {
        resolve()
    })
})
//cold drinks
const getColddrinks=getButter.then(()=>
{
    console.log('husband says i have colddrink')
    return new Promise((resolve,reject)=>
    {
        resolve()
    })
})
getColddrinks.then(()=>
{
    console.log('p3:shows ticket')
})
console.log('p4:shows ticket')
console.log('p5:shows ticket') */

//task async wait que 2 deliverable using async
/* console.log('p1:shows ticket')
console.log('p2:shows ticket')
const premovie=async()=>
{
    const wifebringsticket=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve('ticket')
    },3000)
});
const getpopCorn=new Promise((resolve,reject)=>(resolve('popcorn')))
const getButter=new Promise((resolve,reject)=>(resolve('butter')))
const getColddrinks=new Promise((resolve,reject)=>(resolve('Colddrinks')))
let ticket=await wifebringsticket;
    console.log('wife says i have tickets')
    console.log('husband says we can go')
    console.log('wife says i am hungry')
let popcorn=await getpopCorn;
    console.log('husband says i have popcorn')
    console.log('husband says we can go')
    console.log('wife says i need butter on popcorn')
let butter=await getButter;
    console.log('husband says i have butter')
    console.log('husband says we can go')
    console.log('wife says i need colddrinks for u')
let colddrink=await getColddrinks;
    console.log('husband says i have colddrinks')
    console.log('husband says we can go')
    console.log('wife says yes')
return ticket;
}
premovie().then(()=>
{
    console.log('p3: shows ticket')
})
console.log('p4:shows ticket')
console.log('p5:shows ticket') */

//with promise all
/* console.log('p1:shows ticket')
console.log('p2:shows ticket')
const premovie=async()=>
{
    const wifebringsticket=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve('ticket')
    },3000)
});
const getpopCorn=new Promise((resolve,reject)=>(resolve('popcorn')))
const getButter=new Promise((resolve,reject)=>(resolve('butter')))
const getCandy=new Promise((resolve,reject)=>(resolve('candy')))
const getColddrinks=new Promise((resolve,reject)=>(resolve('Colddrinks')))
let ticket=await wifebringsticket;
    
let= await Promise.all([getpopCorn,getButter,getCandy,getColddrinks])
    console.log('popcorn,butter,candy,colddrinks')
return ticket;
}
premovie().then(()=>
{
    console.log('p3: shows ticket')
})
console.log('p4:shows ticket')
console.log('p5:shows ticket') */

//deliverable que 4 task 7
const posts = [
    { title: 'Post one', body: 'This is post one', createdAt: new Date().getTime() },
    { title: 'Post two', body: 'This is post two', createdAt: new Date().getTime() },
    { title: 'Post three', body: 'This is post three', createdAt: new Date().getTime() },
    { title: 'Post four', body: 'This is post four', createdAt: new Date().getTime() }
]

function getPost() {
    setTimeout(() => {
        let output = '';
        for (let i = 0; i < posts.length; i++) {
            output += `<li>${posts[i].title}--last updated  ${Math.floor(new Date().getTime() - posts[i].createdAt) / 1000} Seconds ago</li>`
        }
        document.body.innerHTML = output;
    }, 1000)
}
getPost()
const createPost = async () => {
    const getPost = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(posts.push({ title: 'Post five', body: 'This is post five', createdAt: new Date().getTime() }))
        }, 2000)
    })
    let ticket = await getPost;
    console.log('post 5 added')
    return ticket
}
createPost().then(() => {
    console.log(posts)
})
const deletePost = async () => {
    const getPost = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(posts.pop())
        }, 3000)
    })
    let del = await getPost;
    console.log('post 5 deleted')
    return del
}
deletePost().then(() => {
    console.log(posts)
})

