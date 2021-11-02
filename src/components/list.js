import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {useSelector} from 'react-redux';
import { deleteBook } from '../actions';
import { useDispatch } from 'react-redux';
import '../App.css';
function List(props) {
    const dispatch=useDispatch();
    const list=useSelector((state)=> state.myreducer.data);
    return (
        <div className="App">
            {list.map((e,key)=>{return(
                <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={e.image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {e.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {e.author}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        ISBN:{e.isbn}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Released:{e.release_date}
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary" onClick={()=>{dispatch(deleteBook(key))}}>
                    Delete
                </Button>
                </CardActions>
            </Card>
            )})}
        </div>
    )
}

export default List
