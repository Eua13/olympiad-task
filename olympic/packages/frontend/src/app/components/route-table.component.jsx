import styles from './route-table.module.css';

const RouteTable=({data})=> {
  return (
    <div style={{padding: 1 + "rem"}}>
    <table className={styles['route-list-table']}>
    
    <thead>
        <tr className={styles['route-list-table__table-header']}>
          <th>
            {/* empty col for route number/id */}
          </th>
          <th>
            Route ID
          </th>
          <th>
            Start address
          </th>
          <th>
            End address
          </th>
          <th>
            Workload index
          </th>
          <th>
            Usage index
          </th>
          <th>
            Start date
          </th>
          <th>
            End date
          </th>
        </tr>
    </thead>
    <tbody>
      {
          data.route.map((route,index) => (
              <tr key={route.id} className={styles['route-list-table__table-body']}>
            <td>{route.id}</td>
            <td>{route["route_id"]}</td>
            <td>{`${data.address[index].street_name}, ${data.address[index].street_name}, ${data.address[index].building_no}`}</td>
            <td>{route["order_number"]}</td>
            <td>{route["workload_index"]}</td>
            <td>{route["usage_index"]}</td>
            <td>{route["start_date"]}</td>
            <td>{route["end_date"]}</td>
            
          </tr>
        ))
    }
    </tbody>
    </table>
  
    </div>
  );
}
export default RouteTable;
