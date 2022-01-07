import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import axios from './axios';
import { forwardRef } from 'react';
import Clear from '@material-ui/icons/Clear';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Search from '@material-ui/icons/Search';


const tableIcons = {
  
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />)
};


const Tabla = ({ fetchURL }) => {

  const [data_m, setData_m] = useState([])

  const data_columns = [
    { title: 'Código', field: 'code'},
    { title: 'Categoria', field: 'category'},
    { title: 'Nombre', field: 'name'}
  ]

  useEffect(() => {

    async function fetchData() {

      try {
        const monograph_req = await axios.get(fetchURL)
        setData_m(monograph_req.data)
        return monograph_req
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [fetchURL])
 
    return (
      <div>
        <MaterialTable
          icons={tableIcons} 
          columns={data_columns}
          data={data_m}
          title=""
          onChangePage={()=>{console.log(data_m)}}
        />
      </div>
    )
  }

  export default Tabla;