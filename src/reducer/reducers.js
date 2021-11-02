// import { addTodo,remove,deleteTodo } from "../actions";
// const Book={
//   "name":"Dummy book1",
//   "author":"J.K Rowling",
//   "release_date":new Date().toISOString().getDate,
//   "isbn":123456,
//   "image":"https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg"
// }
var data = {
  data: [
    {
      "name":"Dummy book1",
      "author":"J.K Rowling",
      "release_date":new Date().toISOString(),
      "isbn":123456,
      "image":"https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg"
    },
    {
      "name":"Dummy book2",
      "author":"J.K Rowling",
      "release_date":new Date().toISOString(),
      "isbn":123457,
      "image":"https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg"
    },
    {
      "name":"Dummy book3",
      "author":"J.K Rowling",
      "release_date":new Date().toISOString(),
      "isbn":123458,
      "image":"https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg"
    },
    {
      "name":"Dummy book4",
      "author":"J.K Rowling",
      "release_date":new Date().toISOString(),
      "isbn":123459,
      "image":"https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg"
    }
    ,
    {
      "name":"Dummy book5",
      "author":"J.K Rowling",
      "release_date":new Date().toISOString(),
      "isbn":123460,
      "image":"https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg"
    }
    ,
    {
      "name":"Dummy book6",
      "author":"J.K Rowling",
      "release_date":new Date().toISOString(),
      "isbn":123461,
      "image":"https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg"
    }
  ]
};

export const myreducer = (state=data, action) => {

    switch(action.type){
        case "DELETE_BOOK":
          const key=action.index;
          const newlist=state.data.filter((elem,index)=>index!==key); 
          return {...state,data:newlist}
        default: return state;
    }
};
