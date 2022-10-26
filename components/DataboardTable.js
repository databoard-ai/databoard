import { useTable } from "react-table"

function DataboardTable({ columns, data }) {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state
    } = useTable({ columns, data })
    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>

                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderGroupProps()}>{column.render("Header")}</th>
                        ))}
                    </tr>
                ))}
            
            </thead>
            <tbody {...getTableBodyProps()}>
               {rows.map((row,i)=>{
                    prepareRow(row)
                return (
            <tr {...row.getRowProps()}>
                      {row.cells.map((cell)=>{
                        return (
                            <td className="px- py-4 whitespace-nowrap text-sm leading-5 font-medium text-gray-900">

                            </td>
                        )
                      })}
            </tr>
                )
               })}
            </tbody>
        </table>
    )
}

export default DataboardTable