import React, {useState} from 'react';
import {
    Link
  } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Button} from '@material-ui/core';

export default function Search(props) {

    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [maakond__maakond, setMaakond] = useState("");
    const [country__value, setCountryValue] = useState("");
    

    const classes = makeStyles({
        inputContainer: {
            display:"flex",
            alignItems: "center",
        },
        searchField: {
            marginRight:"10px"
        },
        button: {
            marginRight: "10px",
        }
    });

    return(
        <div className={classes().inputContainer}>
           <TextField 
                id="latitude-input" 
                label="Latitude" 
                variant="outlined" 
                className={classes().searchField}
                onChange={(e)=>setLatitude(e.target.value)} 
                value={latitude}
            />
            <TextField 
                id="longitude-input" 
                label="Longitude" 
                variant="outlined" 
                className={classes().searchField}
                onChange={(e)=>setLongitude(e.target.value)} 
                value={longitude}
            />
            <TextField 
                id="locality-input" 
                label="Maakond" 
                variant="outlined" 
                className={classes().searchField}
                onChange={(e)=>setMaakond(e.target.value)} 
                value={maakond__maakond}
            />
            <TextField 
                id="countryValue-input" 
                label="Country" 
                variant="outlined" 
                className={classes().searchField}
                onChange={(e)=>setCountryValue(e.target.value)} 
                value={country__value}
            />
            
            <Link to="/results">
                <Button 
                    variant="contained" 
                    className={classes().button}
                    onClick={
                        ()=> props.searchQuery(
                                {latitude, longitude, maakond__maakond, country__value}
                        )
                    }
                >
                    Search
                </Button>
            </Link>
            <Link to="/">
                <Button 
                    variant="contained" 
                    className={classes().button}
                    onClick={
                        ()=> {
                            setLatitude("")
                            setLongitude("")
                            setLatitude("")
                            setMaakond("")
                            setCountryValue("")
                        }
                    }
                >
                    Clear
                </Button>
            </Link>
        </div>
    )
}
