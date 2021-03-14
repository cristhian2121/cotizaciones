import React from 'react';

import { IActionsTable, IColumn } from '@interfaces/Iproxies';

export const Table = ({colums}: {colums: IColumn[]}) => {


  return(
<div className="flex flex-col">
  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>

              {colums.map(column => 
                <th id={column.value} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {column.name}
                </th>
              )}
              {/* <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Edit</span>
              </th> */}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              {
                colums.map(column => 
                  <td id={column.value} className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{column.value}</div>
                  </td>
                )
              }
              {/* <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
              </td> */}
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  )
}
