
import post1 from '../assets/posts/1.mp4'
import post2 from '../assets/posts/1.mp4'
import post3 from '../assets/posts/3.mp4'
import post4 from '../assets/posts/4.mp4'
import post5 from '../assets/posts/5.mp4'
import post6 from '../assets/posts/6.mp4'
import post7 from '../assets/posts/7.mp4'
import post8 from '../assets/posts/8.mp4'
import post9 from '../assets/posts/9.mp4'
import post10 from '../assets/posts/10.mp4'
import post11 from '../assets/posts/11.mp4'
import post12 from '../assets/posts/7.jpeg'
import post13 from '../assets/posts/8.jpeg'
import post14 from '../assets/posts/9.jpeg'
import post15 from '../assets/posts/10.jpeg'
import person1 from '../assets/person/1.jpeg'
import person2 from '../assets/person/2.jpeg'
import person3 from '../assets/person/3.jpeg'
import person4 from '../assets/person/4.jpeg'
import person5 from '../assets/person/5.jpeg'
import person6 from '../assets/person/6.jpeg'
import person7 from '../assets/person/7.jpeg'
import person8 from '../assets/person/8.jpeg'
import person9 from '../assets/person/9.jpeg'
import me from '../assets/person/me.jpg'


export const users =[
    {
        _id:1,
        username:'code_with_godie',
        name:'godfrey maina',
        email:'ngugimaina2019@gmail.com',
        profilePic:me
    },
    {
        _id:2,
        username:'poly_sonie',
        name:'pauline muthoni',
        email:'polysonie@gmail.com',
        profilePic:person1
    },
    {
        _id:3,
        username:'allan254',
        name:'allan mwangi',
        email:'allan254@gmail.com',
        profilePic:person7
    },
    {
        _id:4,
        username:'eddie_kb',
        name:'eddie kibe',
        email:'kibe254@gmail.com',
        profilePic:person2
    },
    {
        _id:5,
        username:'vale_bobo',
        name:'valentine wambui',
        email:'val254@gmail.com',
        profilePic:person5
    },
]
export const followings =[
    {
        id:1,
        name:'val_bobo',
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXWdO3i9yjhosiQOZuFSVWIjXxMuZ6ftg9kKduIYlG&s',
    },
    {
        id:456,
        name:'code_with_godie',
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXWdO3i9yjhosiQOZuFSVWIjXxMuZ6ftg9kKduIYlG&s',
    },
    {
        id:2,
        name:'allan254',
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQdjGf52V3JIVpgq3_LCWwmeveumiYyAWTak6oNtIG&s',
    },
    {
        id:3,
        name:'poly_sonie',
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE-YSmioT2OiFqLw4AVuXvGoBAdei0y1LkS5ljPyN1&s',
    },
    {
        id:4,
        name:'angel',
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYC2kwjrBHTVSbO9AmVkzGktBI1NDvyXydqg3XF_LM&s'
    },
    {
        id:5,
        name:'eddie_kb',
        url:'https://media.gettyimages.com/id/462364760/photo/writer-director-jared-hess-of-don-verdean-poses-for-a-portrait-at-the-village-at-the-lift.jpg?s=612x612&w=gi&k=20&c=BnUuJu7pOJcT93OUZ9-0vMg7CUaX2gDZltruE8MgOdo='
    },
    {
        id:6,
        name:'val_bobo',
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXWdO3i9yjhosiQOZuFSVWIjXxMuZ6ftg9kKduIYlG&s'
    },
    {
        id:7,
        name:'allan254',
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQdjGf52V3JIVpgq3_LCWwmeveumiYyAWTak6oNtIG&s'
    },
    {
        id:8,
        name:'poly_sonie',
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE-YSmioT2OiFqLw4AVuXvGoBAdei0y1LkS5ljPyN1&s'
    },
    {
        id:9,
        name:'angel',
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYC2kwjrBHTVSbO9AmVkzGktBI1NDvyXydqg3XF_LM&s'
    },
    {
        id:10,
        name:'eddie_kb',
        url:'https://media.gettyimages.com/id/462364760/photo/writer-director-jared-hess-of-don-verdean-poses-for-a-portrait-at-the-village-at-the-lift.jpg?s=612x612&w=gi&k=20&c=BnUuJu7pOJcT93OUZ9-0vMg7CUaX2gDZltruE8MgOdo='
    },
]
export const posts =[
    {
        id:1,
        user:1,
        profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXWdO3i9yjhosiQOZuFSVWIjXxMuZ6ftg9kKduIYlG&s',
        url:'https://cdn.pixabay.com/photo/2022/01/22/13/30/mother-and-child-6957312_960_720.jpg',
        postType:'image'
    },
    {
        id:98877,
        user:2,
        profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXWdO3i9yjhosiQOZuFSVWIjXxMuZ6ftg9kKduIYlG&s',
        postType:'collection',
        related:[
            {
                postType:'image',
                url:'https://cdn.pixabay.com/photo/2022/01/22/13/30/mother-and-child-6957312_960_720.jpg'
            },
            {
                postType:'image',
                url:'https://cdn.pixabay.com/photo/2023/05/05/12/52/valley-7972374_960_720.jpg'
            },
            {
                postType:'image',
                url:'https://cdn.pixabay.com/photo/2023/04/15/14/42/baby-7927866_960_720.jpg'
            }
    ]
    },
    {
        id:111,
        user:2,
        profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXWdO3i9yjhosiQOZuFSVWIjXxMuZ6ftg9kKduIYlG&s',
        url:post1,
        postType:'video'
    },
    {
        id:2,
        user:3,
        profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQdjGf52V3JIVpgq3_LCWwmeveumiYyAWTak6oNtIG&s',
        url:'https://cdn.pixabay.com/photo/2023/04/15/14/42/baby-7927866_960_720.jpg',
        postType:'image'
    },
    {
        id:898,
        user:2,
        profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE-YSmioT2OiFqLw4AVuXvGoBAdei0y1LkS5ljPyN1&s',
        url:post6,
        postType:'video'
    },
    {
        id:3,
        user:4,
        profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE-YSmioT2OiFqLw4AVuXvGoBAdei0y1LkS5ljPyN1&s',
        url:'https://cdn.pixabay.com/photo/2016/04/20/20/16/monkeys-1341973_960_720.jpg',
        postType:'image'
    },
    {
        id:988788,
        user:1,
        profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXWdO3i9yjhosiQOZuFSVWIjXxMuZ6ftg9kKduIYlG&s',
        postType:'collection',
        related:[
            {
                postType:'image',
                url:'https://cdn.pixabay.com/photo/2022/01/22/13/30/mother-and-child-6957312_960_720.jpg',
            
            },
            {
                postType:'video',
                url:post1
            
            },
            {
                postType:'image',
                url:'https://cdn.pixabay.com/photo/2023/05/05/12/52/valley-7972374_960_720.jpg'
            
            }
    ]
    },
    {
        id:300,
        user:5,
        profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE-YSmioT2OiFqLw4AVuXvGoBAdei0y1LkS5ljPyN1&s',
        url:post2,
        postType:'video'
    },
    {
        id:4,
        user:1,
        profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYC2kwjrBHTVSbO9AmVkzGktBI1NDvyXydqg3XF_LM&s',
        url:'https://cdn.pixabay.com/photo/2023/05/05/12/52/valley-7972374_960_720.jpg',
        postType:'image'

    },
    {
        id:10000,
        user:5,
        profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE-YSmioT2OiFqLw4AVuXvGoBAdei0y1LkS5ljPyN1&s',
        url:post7,
        postType:'video'
    },
    {
        id:5,
        user:2,
        profilePic:'https://media.gettyimages.com/id/462364760/photo/writer-director-jared-hess-of-don-verdean-poses-for-a-portrait-at-the-village-at-the-lift.jpg?s=612x612&w=gi&k=20&c=BnUuJu7pOJcT93OUZ9-0vMg7CUaX2gDZltruE8MgOdo=',
        url:'https://cdn.pixabay.com/photo/2023/03/27/08/53/woman-7880177_960_720.jpg',
        postType:'image'
    },
    {
        id:500,
        user:3,
        profilePic:'https://media.gettyimages.com/id/462364760/photo/writer-director-jared-hess-of-don-verdean-poses-for-a-portrait-at-the-village-at-the-lift.jpg?s=612x612&w=gi&k=20&c=BnUuJu7pOJcT93OUZ9-0vMg7CUaX2gDZltruE8MgOdo=',
        url:post3,
        postType:'video'
    },
    {
        id:6,
        user:4,
        profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXWdO3i9yjhosiQOZuFSVWIjXxMuZ6ftg9kKduIYlG&s',
        url:'https://cdn.pixabay.com/photo/2019/07/17/19/17/hands-4344711_960_720.jpg',
        postType:'image'
    },
    {
        id:7,
        username:'allan254',
        profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQdjGf52V3JIVpgq3_LCWwmeveumiYyAWTak6oNtIG&s',
        url:'https://cdn.pixabay.com/photo/2023/05/06/14/08/deer-7974406_960_720.jpg',
        postType:'image'
    },
    {
        id:88,
        user:1,
        profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE-YSmioT2OiFqLw4AVuXvGoBAdei0y1LkS5ljPyN1&s',
        url:post8,
        postType:'video'
    },
    {
        id:700,
        user:5,
        profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQdjGf52V3JIVpgq3_LCWwmeveumiYyAWTak6oNtIG&s',
        url:post4,
        postType:'video'
    },
    {
        id:8,
        user:1,
        profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE-YSmioT2OiFqLw4AVuXvGoBAdei0y1LkS5ljPyN1&s',
        url:'https://cdn.pixabay.com/photo/2023/04/05/13/01/animal-7901464_960_720.jpg',
        postType:'image'
    },
    {
        id:9,
        user:2,
        profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYC2kwjrBHTVSbO9AmVkzGktBI1NDvyXydqg3XF_LM&s',
        url:'https://cdn.pixabay.com/photo/2023/05/03/19/04/tea-7968441_960_720.jpg',
        postType:'image'

    },
    {
        id:768,
        user:1,
        profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE-YSmioT2OiFqLw4AVuXvGoBAdei0y1LkS5ljPyN1&s',
        url:post9,
        postType:'video'
    },
    {
        id:900,
        user:3,
        profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYC2kwjrBHTVSbO9AmVkzGktBI1NDvyXydqg3XF_LM&s',
        url:post5,
        postType:'video'

    },
    {
        id:10,
        user:4,
        profilePic:'https://media.gettyimages.com/id/462364760/photo/writer-director-jared-hess-of-don-verdean-poses-for-a-portrait-at-the-village-at-the-lift.jpg?s=612x612&w=gi&k=20&c=BnUuJu7pOJcT93OUZ9-0vMg7CUaX2gDZltruE8MgOdo=',
        url:'https://cdn.pixabay.com/photo/2023/04/28/05/44/bird-7955900_960_720.jpg',
        postType:'image'

    },
    // {
    //     id:7238,
    //     user:1,
    //     profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE-YSmioT2OiFqLw4AVuXvGoBAdei0y1LkS5ljPyN1&s',
    //     url:post10,
    //     postType:'video'
    // },
    {
        id:7239,
        user:1,
        profilePic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE-YSmioT2OiFqLw4AVuXvGoBAdei0y1LkS5ljPyN1&s',
        url:post11,
        postType:'video'
    },
]
export const messeges = [
    {
        _id:1,
        messege:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nisi officia praesentium ad reiciendis totam! Vitae soluta in illum, animi unde maiores voluptatem dolores dolorum nostrum modi repellendus fugiat quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nisi officia praesentium ad reiciendis totam! Vitae soluta in illum, animi unde maiores voluptatem dolores dolorum nostrum modi repellendus fugiat quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nisi officia praesentium ad reiciendis totam! Vitae soluta in illum, animi unde maiores voluptatem dolores dolorum nostrum modi repellendus fugiat quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nisi officia praesentium ad reiciendis totam! Vitae soluta in illum, animi unde maiores voluptatem dolores dolorum nostrum modi repellendus fugiat quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nisi officia praesentium ad reiciendis totam! Vitae soluta in illum, animi unde maiores voluptatem dolores dolorum nostrum modi repellendus fugiat quas.',
        date:'1pm',
        sender:1,
        type:'text'
    },
    {
        _id:2,
        messege:'hey',
        date:'1:20pm',
        sender:2,
        type:'text'
    },
    {
        _id:3,
        messege:'hey too',
        date:'1:20pm',
        sender:1,
        type:'text'
    },
    {
        _id:4,
        messege:'how are doing',
        date:'1:30pm',
        sender:2,
        type:'text'
    },
    {
        _id:5,
        messege:'am fine what about you',
        date:'1:31pm',
        sender:1,
        type:'text'
    },
    {
        _id:6,
        messege:'also doing great',
        date:'1:31pm',
        sender:2,
        type:'text'
    },
    {
        _id:7,
        messege:'just checking on you',
        date:'1:35pm',
        sender:1,
        type:'text'
    },
    {
        _id:8,
        messege:'ooh thank you so much',
        date:'1:45pm',
        sender:2,
        type:'text'
    },
]
export const reels = [
    
]