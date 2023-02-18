import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from "react-router-dom";

/** importing CSS*/
import './house.css';

/** Material UI Code for styling Card though didn't works well */
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


/** Fetching Data from House API and then shows them in Card and grid from Material UI */
const House = () => {
 
    const [users, setUsers] = useState([]);
    const getUsers = async () =>{
         
        const response = await fetch('https://www.anapioficeandfire.com/api/houses');         
        setUsers(await response.json());

    }

    useEffect(() => {
         getUsers();
    },[]);

    return (
        <>
            <h1 className = "heading" style={{ textAlign: "center" }} >Game of Thrones</h1>
            <h3 className = "heading" style={{ textAlign: "center" }} >Houses of Dragon</h3>

            <div className="container-fluid">
            <Grid container spacing={2}>
            
            {
                users.map((curElem) => {
                    return(
                        <div key = {curElem.url}>     
                              <Grid item xs={12}>
                              <Item>
                               <Card className="c" sx={{ maxWidth: 345 }}>
                                <CardActionArea> 
                                    <CardContent>
                                       <Typography gutterBottom variant="h5" component="div">
                                         {curElem.name}
                                       </Typography>
                                       <Typography gutterBottom variant="h6" component="div">
                                         {curElem.region}
                                       </Typography>
                                       <Typography variant="body2" color="text.secondary">
                                         {curElem.coatOfArms}
                                       </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                     <Button className="btn" size="small" color="primary">
                                     <Link to={`/info/${curElem.url.split("/").pop()}`}>
                                     Know More
                                    </Link>
                                     </Button> 
                                </CardActions>
                                </Card>
                                </Item>
                                </Grid>
                        </div>
                    )
                })
            }     
            </Grid>
            </div>
        </>
    );
}

export default House;



    



