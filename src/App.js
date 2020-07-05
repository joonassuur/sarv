import React, {useState, useEffect, useRef} from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import { TextField, Container, Paper, Card, CardContent } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

import theme from './styles/theme.js'
import {sendRequest} from './api/index.js'

import Search from './components/search'
import Results from './components/results'
import './App.scss';

function App() {

  const [searchQuery, setSearchQuery] = useState(undefined)
  const [searchResults, setSearchResults] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(undefined)

  const prevInputRef = useRef();
  const prevInput = prevInputRef.current;


  useEffect(()=> {
    const areEqualShallow = () => {
      for(let key in prevInput) {
          if(prevInput[key] !== searchQuery[key]) {
              return false;
          }
      }
      return true;
    }
    prevInputRef.current = searchQuery

    if(searchQuery && areEqualShallow()) {
      (async ()=> 
        setSearchResults(await sendRequest(searchQuery, currentPage))
      )()
    }

    if (searchQuery && !areEqualShallow()) {
      setCurrentPage(1)
      const x = async ()=> 
        setSearchResults(await sendRequest(searchQuery, 1))
      x()
    }
  }, [searchQuery, currentPage, prevInput])


  useEffect(()=> {
    if (searchResults) {
      setTotalPages(parseInt(searchResults.page?.slice(10)))
    }
  }, [searchResults, totalPages])


  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Paper>
          <Card>
            <CardContent>
              <Router>
                <Route 
                  path="/"
                  render={()=> (
                    <Search
                      searchQuery={(e)=>setSearchQuery(e)}
                    />
                  )}
                >
                </Route>
                <Route 
                  path="/results"
                  render={()=> (
                    <>
                      <Results
                        searchResults={searchResults}
                      />
                      <Pagination  
                        onChange={(e, x)=>setCurrentPage(x)}
                        count={totalPages || 0} 
                        page={currentPage}
                      />
                    </>
                  )}
                >
                </Route>
              </Router>
            </CardContent>
          </Card>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
