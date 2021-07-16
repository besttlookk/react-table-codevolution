import './App.css';
// import { Basic_table } from './components/1_Basic_table';
// import { SortingTable } from './components/2_SortingTable';
import { FilteringTable } from './components/3_FilteringTable';
import { PaginationTable } from './components/4_PaginationTable';
import { ColumnHiding } from './components/6_ColumnHiding';

function App() {
  return (
    <div className="App">
        {/* <Basic_table /> */}
        {/* <SortingTable /> */}
        {/* <FilteringTable /> */}
        {/* <PaginationTable /> */}
        <ColumnHiding />
    </div>
  );
}

export default App;
