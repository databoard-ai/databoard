import axios from "axios"
import { useMemo } from "react"
import DataTable from "react-data-table-component"
import MOCK_DATA from './MOCK_DATA.json'
import Checkbox from '../components/Checkbox'

function DataboardTable() {


    const data = MOCK_DATA


    const columns =
        [
            {
                name: "ID",
                selector: row => row.id,
                
            },

            {
                name: "Name",
                selector: row => row.name,
                sortable:true
            },

            {
                name: "Gender",
                selector: row => row.gender,
                sortable:true
            },

            {
                name: "Time In",
                selector: row => row.time_in,
                sortable:true
            },

            {
                name: "Time Out",
                selector: row => row.time_out,
                sortable:true
            },
            {
                name: "Action",
                cell:(row)=><button className="btn btn-primary">Options</button>,

            },

        ];
    
    return (
  <div className=" w-full">
 < DataTable
            columns={columns}
            data={data}
            pagination
            fixedHeader={false}
            fixedHeaderScrollHeight="600px"
            className=""
            selectableRows
            selectableRowsHighlight
           highlightOnHover
           
            />

  </div>
    )
}

export default DataboardTable