import React, { useEffect, useState } from "react";
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
// import 'bootstrap/dist/css/bootstrap.min.css';
import file from "../assets/File text 1.png"


DataTable.use(DT);
function DetailedReport() {


    return (
        <div>
          <h1 className="flex gap-2 text-2xl font-bold mb-4 mt-8 rounded-lg"><img src={file} alt="" />Detailed report</h1>
            
            <DataTable className="table border  w-full" 
    
         options={{
          paging: true,
          searching: false,
          ordering: true,
          info: true,
          lengthMenu: [5],lengthChange: false,
         
        }}>
                <thead>
                    <tr>
                        <th>CUSTOMER NAME</th>
                        <th>COMPANY</th>
                        <th>ORDER VALUE</th>
                        <th>ORDER DATE</th>
                        <th>STATUS</th>
                    </tr>
                </thead>
                
            </DataTable>
        </div>

    );
}

export default DetailedReport;
