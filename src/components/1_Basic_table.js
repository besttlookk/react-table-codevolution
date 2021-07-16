/*

// --------6 step process
1. Get the data you wnat to display
2. Define the columns for our data
3. Use the data and columns defined to create a table instance using react-table
4. Define a basic structure using plain HTML
5.  Us the table instance created in step 3 to bring life to the HTML defined in step 4
6. Include the desired CSS 


*/
import React, {useMemo}from 'react'
import { useTable } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS, GROUPED_COLUMNS } from './columns'
import './table.css'


export const Basic_table = () => {

    // use Table recommends to memoize the rows and column using "useMemo" hook
    // it make sure on every render data is not fetched again and again
    // const columns = useMemo(() => COLUMNS, [])
    const columns = useMemo(() => GROUPED_COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])



    // inside useTable function we pass objects with two properties(columns & row)
    // const tableInstance = useTable({
    //     // columns : COLUMNS,
    //     // data: MOCK_DATA
    //     columns,
    //     data
    // })

    // console.log(tableInstance)

    // const {
    //     getTableProps,
    //     getTableBodyProps,
    //     headerGroups,
    //     rows,
    //     prepareRow,

    // } = tableInstance

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow
      } = useTable({
        columns,
        data
      })


    return (
        <table {...getTableProps()}>
             <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>

            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                prepareRow(row)
                    return (
                 <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
            </tbody>
            <tfoot>
          {footerGroups.map(footerGroup => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map(column => (
                <td {...column.getFooterProps()}>{column.render('Footer')}</td>
              ))}
            </tr>
          ))}
        </tfoot>
            
        </table>
    )
}
