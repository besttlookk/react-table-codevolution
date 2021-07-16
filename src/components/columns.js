import { format } from 'date-fns'
import { ColumnFilter } from './3.2_ColumnFilter'

// we have the same filter property for every column. It would be better 
//     if we could specify this propery once and ask react-table to add in every column and that is where defaultColum comes into picture

export const COLUMNS = [
    {
        Header: "id",
        Footer: "id",
        accessor: "id",
        // what if we dont want filter in any column..like in this case ..in "id" coloum
        // we cant just remove "Filter" property from a column. 
        // if we want to disable, we need to add another property called:disableFilter
        // Filter : ColumnFilter,
        disableFilters: true
    },
    {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
        // Filter : ColumnFilter

    },
    {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
        // Filter : ColumnFilter

    },
    {
        Header: "Date of Birth",
        Footer: "Date of Birth",
        accessor: "date_of_birth",
        Cell: ({ value }) => {
            return format(new Date(value), 'dd/MM/yyyy')
        },
        // Filter : ColumnFilter


    },
    {
        Header: "Country",
        Footer: "Country",
        accessor: "country",
        // Filter : ColumnFilter

    },
    {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
        // Filter : ColumnFilter

    },
]


export const GROUPED_COLUMNS = [
    {
      Header: 'id',
      Footer: 'id',
      accessor: 'id'
    },
    {
      Header: 'Name',
      Footer: 'Name',
      columns: [
        {
            Header: "First Name",
            Footer: "First Name",
            accessor: "first_name"
        },
        {
            Header: "Last Name",
            Footer: "Last Name",
            accessor: "last_name"
        },
      ]
    },
    {
      Header: 'Info',
      Footer: 'Info',
      columns: [
        {
            Header: "Date of Birth",
            Footer: "Date of Birth",
            accessor: "date_of_birth"
        },
        {
            Header: "Country",
            Footer: "Country",
            accessor: "country"
        },
        {
            Header: "Phone",
            Footer: "Phone",
            accessor: "phone"
        }
  ]

}
]