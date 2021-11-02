
export const deleteBook = (index)=>{
    return(
        {
            type:"DELETE_BOOK",
            index:index
        }
    )
}