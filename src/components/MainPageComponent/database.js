import { v4 as uid } from 'uuid';

export const localDB = [
  {
    _id: uid(),
    title: 'This is Note One',
    content: [
        {
            id: uid(),
            html: '<p>Block One</p>'
        },
        {
            id: uid(),
            html: '<p>Block Two</p>'
        },
        {
            id: uid(),
            html: '<p>Block Three</p>'
        },

    ],
    image:"https://www.notion.so/image/https%3A%2F%2Fwww.docker.com%2Fsites%2Fdefault%2Ffiles%2Fd8%2Fstyles%2Frole_icon%2Fpublic%2F2019-07%2FMoby-logo.png%3Fitok%3DsYH_JEaJ?table=block&id=e46e822a-19c0-4fe7-b026-1dcd793c1f1f&width=250&userId=e646da05-b654-4cdb-b6a2-90edf1444f26&cache=v2"
  },
  {
    _id: uid(),
    title: 'Note Object Two',
    content: [
        {
            id: uid(),
            html: '<p>Block 1</p>'
        },
        {
            id: uid(),
            html: '<p>Block 2</p>'
        },

    ],
    image:"https://notion-emojis.s3-us-west-2.amazonaws.com/v0/svg-twitter/1f40a.svg"
  },
  {
    _id: uid(),
    title: 'Note Object Three',
    content: [
        {
            id: uid(),
            html: '<p>Block A</p>'
        },
    ],
    image:"https://notion-emojis.s3-us-west-2.amazonaws.com/v0/svg-twitter/1f418.svg"
  },

]

export function randomImage(){
    const imgArray = [
        "https://notion-emojis.s3-us-west-2.amazonaws.com/v0/svg-twitter/1f435.svg",
        "https://notion-emojis.s3-us-west-2.amazonaws.com/v0/svg-twitter/1f98d.svg",
        "https://notion-emojis.s3-us-west-2.amazonaws.com/v0/svg-twitter/1f98a.svg",
        "https://notion-emojis.s3-us-west-2.amazonaws.com/v0/svg-twitter/1f42e.svg",
        "https://notion-emojis.s3-us-west-2.amazonaws.com/v0/svg-twitter/1f416.svg",
        "https://notion-emojis.s3-us-west-2.amazonaws.com/v0/svg-twitter/1f418.svg",
        "https://notion-emojis.s3-us-west-2.amazonaws.com/v0/svg-twitter/1f413.svg",
        "https://notion-emojis.s3-us-west-2.amazonaws.com/v0/svg-twitter/1f422.svg",
        "https://notion-emojis.s3-us-west-2.amazonaws.com/v0/svg-twitter/1f433.svg",
        "https://notion-emojis.s3-us-west-2.amazonaws.com/v0/svg-twitter/1f419.svg",
    ];
    const index = Math.floor(Math.random() * 11); 
    return imgArray[index]; 
}

export function randomCover(){
    const imgArray = [
        "https://www.notion.so/image/https%3A%2F%2Fwww.notion.so%2Fimages%2Fpage-cover%2Fmet_frederic_edwin_church_1871.jpg?table=block&id=c8e22ba6-e193-46a4-bd93-bc3abddb535d&width=3070&userId=e646da05-b654-4cdb-b6a2-90edf1444f26&cache=v2",
        "https://www.notion.so/image/https%3A%2F%2Fwww.notion.so%2Fimages%2Fpage-cover%2Fnasa_the_blue_marble.jpg?table=block&id=c8e22ba6-e193-46a4-bd93-bc3abddb535d&width=3070&userId=e646da05-b654-4cdb-b6a2-90edf1444f26&cache=v2",
        "https://www.notion.so/image/https%3A%2F%2Fwww.notion.so%2Fimages%2Fpage-cover%2Fwoodcuts_11.jpg?table=block&id=c8e22ba6-e193-46a4-bd93-bc3abddb535d&width=3070&userId=e646da05-b654-4cdb-b6a2-90edf1444f26&cache=v2",
        "https://www.notion.so/image/https%3A%2F%2Fwww.notion.so%2Fimages%2Fpage-cover%2Fwoodcuts_14.jpg?table=block&id=c8e22ba6-e193-46a4-bd93-bc3abddb535d&width=3070&userId=e646da05-b654-4cdb-b6a2-90edf1444f26&cache=v2",
        "https://www.notion.so/image/https%3A%2F%2Fwww.notion.so%2Fimages%2Fpage-cover%2Fmet_william_morris_1877_willow.jpg?table=block&id=c8e22ba6-e193-46a4-bd93-bc3abddb535d&width=3070&userId=e646da05-b654-4cdb-b6a2-90edf1444f26&cache=v2",
        "https://2.bp.blogspot.com/-C8vnMOJVWRI/XIkaFbYfEcI/AAAAAAAAAgo/FIBvarQjNwwTVb5OPnpRhUjTU1lcnuQMwCKgBGAs/w3840-h1600-p-k-no-nu/anime-scenery-sunset-uhdpaper.com-4K-112.jpg",


    ];
    
    const index = Math.floor(Math.random() * 6); 
    return imgArray[index]; 
}

// export function removeHTMLTags(str) {
//   return str.replace(/<(.|\n)*?>/g, '').trim();
// }