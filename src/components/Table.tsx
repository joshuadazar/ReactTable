import React, { useEffect, useState } from 'react';
import data from './data';
import DataTable from 'react-data-table-component';
import { messageService } from '../services/service';

const dataArr:any[]= data

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

    useEffect(() => {
        messageService.getMessage().subscribe((value) => {
            console.log(value);
            setCount(value)
        })
    });
    
    return (
        <>
            <button>{count}</button>

            { count ? <DataTable 
            columns={columns}
            data= {dataArr}
            title= "Movies Table"
                pagination
                paginationComponentOptions={tableOpt}
                fixedHeader
                fixedHeaderScrollHeight="600px"
            /> : null }
        
            </>
    )
    
}

export default Table;