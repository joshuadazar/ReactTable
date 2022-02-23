import React, { useEffect, useState } from 'react';
import data from './data';
import DataTable from 'react-data-table-component';
import { getMessage, messageService } from '../services/service';

interface Movie {
    id: number;
    title: string;
    year: string;
    runtime: string;
    genres: any;
    director: string;
    actors: string;
    plot: string;
    posterUrl: string;
}

let dataArr: Movie[] = data

dataArr.map((movie) => {
    movie.genres= movie.genres.map((val:string) => `| ${val} `)
})
    
    


const columns = [
    {
        name: 'Movie',
        selector: 'title',
        sortable:true
    },
    {
        name: 'Year',
        selector: 'year',
        sortable:true
    },
    {
        name: 'Movie Genderes',
        selector: 'genres',
        right:true,
        sortable:true
    }
]

const tableOpt = {
    rowsPerPageText: "Row by page",
    rangeSeparatorText: 'of',
    selectRowsItem: true,
    selectAllRowsText: 'All'
}



const Table = () => {

    let [count, setCount] = useState<boolean>(false);
    const [msg, setMsg] = useState('');
    
    useEffect(() => {
        messageService.getMessage().subscribe((value) => { setCount(value) })
        getMessage().subscribe((val:any) =>setMsg(val))
    });
    
    return (
        <>
            <button>{count}</button>
            { msg.length>0? <h1>{msg}</h1>: <h2>nada de texto</h2>}
            { count ? <DataTable 
                
            columns={columns}
            data= {dataArr}
            title= "Movies Table"
                pagination
                paginationComponentOptions={tableOpt}
                fixedHeader
                fixedHeaderScrollHeight="600px"
                className="responsive-table"
            /> : null }
        
            </>
    )
    
}

export default Table;