import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

/** importing CSS*/
import './info.css';

/** Fetching and Showing Data for given id and then shows them in Table from Material UI */
const Info = (props) => {

  const [ho, setHo] = useState({});
  let { id } = useParams();

  const getHo = async () =>{
         
        const response = await fetch(`https://www.anapioficeandfire.com/api/houses/${id}`);      
        setHo(await response.json());

    }
  
    useEffect(() => {
         getHo();
    },[id]);
    
    return (
    <>
      
      <h3 className = "heading" style={{ textAlign: "center" }} >{ho.name}</h3>
      <div className="container-fluid">
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> #</TableCell>
            <TableCell> # </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">  Name</TableCell>
              <TableCell >{ho.name}</TableCell>   
            </TableRow>

            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">  Region</TableCell>
              <TableCell>{ho.region}</TableCell>   
            </TableRow>

            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">  Coat Of Arms</TableCell>
              <TableCell>{ho.coatOfArms}</TableCell>   
            </TableRow>

            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">  Words</TableCell>
              <TableCell>{ho.words}</TableCell>   
            </TableRow>

            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">  Titles</TableCell>
              <TableCell>{ho.titles}</TableCell>   
            </TableRow>

            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">  Seats</TableCell>
              <TableCell>{ho.seats}</TableCell>   
            </TableRow>

            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">  Current Lord</TableCell>
              <TableCell>{ho.currentLord}</TableCell>   
            </TableRow>

            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">  Heir</TableCell>
              <TableCell>{ho.heir}</TableCell>   
            </TableRow>

            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">  Over lord</TableCell>
              <TableCell>{ho.overlord}</TableCell>   
            </TableRow>

            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">  Founded</TableCell>
              <TableCell>{ho.founded}</TableCell>   
            </TableRow>

            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">  Founder</TableCell>
              <TableCell>{ho.founded}</TableCell>   
            </TableRow>

            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">  Died Out</TableCell>
              <TableCell>{ho.diedOut}</TableCell>   
            </TableRow>

            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">  Ancestral Weapons</TableCell>
              <TableCell>{ho.ancestralWeapons}</TableCell>   
            </TableRow>

            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">  Cadet Branches</TableCell>
              <TableCell>{ho.cadetBranches}</TableCell>   
            </TableRow>

            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">  Sworn Members</TableCell>
              <TableCell>{ho.swornMembers}</TableCell>   
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>
  );
};

export default Info;

