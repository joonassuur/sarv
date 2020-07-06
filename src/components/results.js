import React, {useState,useEffect} from 'react';
import {
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow,
    TablePagination,
    TextField,
} from '@material-ui/core';

export default function Results({searchResults}) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10); 
    const [totalResultsCount, setTotalResultsCount] = useState(0);

    const [results, setResults] = useState("")
    const [localityFilter, setLocalityFilter] = useState("")

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    useEffect(()=> {
      //apply filter on currently selected page
      if (localityFilter) {
        let filter =          
            results
            .filter(e => e.locality?.toLowerCase().includes(localityFilter.toLowerCase()))
            setResults(filter)
            return;
      }
      setResults(searchResults?.results)
      
    }, [localityFilter])

    useEffect(()=> {
      //keep the filter on after page change api call
      if(localityFilter) {
        let filter =          
            searchResults.results
            .filter(e => e.locality?.toLowerCase().includes(localityFilter.toLowerCase()))
        setResults(filter)
        return;
      }
      
      //set results after search/page hange
      setResults(searchResults?.results)
      
    }, [searchResults])

    useEffect(()=> {
      //set total results for current page
      if (results)
        setTotalResultsCount(results?.length)
    }, [results])
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    return results ? (
        <TableContainer>
            <TextField 
              id="filter-locality" 
              label="filter locality" 
              onChange={(e)=>setLocalityFilter(e.target.value)}
            />
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="right">Latitude</TableCell>
                  <TableCell align="right">Longitude</TableCell>
                  <TableCell align="right">Locality</TableCell>
                  <TableCell align="right">County</TableCell>
                  <TableCell align="right">Country</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {results?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id || "-"}
                    </TableCell>
                    <TableCell align="right">{row.latitude || "-"}</TableCell>
                    <TableCell align="right">{row.longitude || "-"}</TableCell>
                    <TableCell align="right">{row.locality || "-"}</TableCell>
                    <TableCell align="right">{row.maakond__maakond || "-"}</TableCell>
                    <TableCell align="right">{row.country__value || "-"}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={totalResultsCount || 0}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </TableContainer>
    ) : null
}
