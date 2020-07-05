import React, {useState} from 'react';
import {
    Link
  } from "react-router-dom";
import {TextField, Button, makeStyles} from '@material-ui/core';

export default function Search(props) {

    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [locality, setLocality] = useState("");
    const [maakond__maakond, setMaakond] = useState("");
    const [country__value, setCountryValue] = useState("");
    
    const classes = makeStyles((theme) => ({
        inputContainer: {
            display:"flex",
            alignItems: "flex-start",
            flexDirection: "column",
            [theme.breakpoints.down('md')]: {
                flexDirection: "column",
                alignContent: "stretch",
                alignItems: "center",
            },
        },
        inputs: {
            display: "flex",
            [theme.breakpoints.down('md')]: {
                flexDirection: "column",
                alignItems: "center"
            },
        },
        searchField: {
            marginRight:"10px",
            [theme.breakpoints.down('md')]: {
                marginBottom: "10px",
            },
        }, 
        button: {
            marginTop: "10px",
            marginRight: "10px",
  
        }
    }));

    return(
        <div className={classes().inputContainer}>
            <div className={classes().inputs}>
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
                    label="Locality (EE)" 
                    variant="outlined" 
                    className={classes().searchField}
                    onChange={(e)=>setLocality(e.target.value)} 
                    value={locality}
                />
                <TextField 
                    id="countyValue-input" 
                    label="County (EE)" 
                    variant="outlined" 
                    className={classes().searchField}
                    onChange={(e)=>setMaakond(e.target.value)} 
                    value={maakond__maakond}
                />
                <TextField 
                    id="countryValue-input" 
                    label="Country (EE)" 
                    variant="outlined" 
                    className={classes().searchField}
                    onChange={(e)=>setCountryValue(e.target.value)} 
                    value={country__value}
                />
            </div>
            <div className="buttons">
                <Link to="/results">
                    <Button 
                        variant="contained" 
                        className={classes().button}
                        onClick={
                            ()=> props.searchQuery(
                                    {latitude, longitude, locality, maakond__maakond, country__value}
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
                                setLocality("")
                                setCountryValue("")
                            }
                        }
                    >
                        Clear
                    </Button>
                </Link>
            </div>
        </div>
    )
}
