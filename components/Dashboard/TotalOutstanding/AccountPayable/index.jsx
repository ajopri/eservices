/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import dynamic from 'next/dynamic';
import { useState } from 'react';
import invoices from './dataInvoices';
import Data from './Data';

const Bar = dynamic(() => import('./Bar'), {
  ssr: false,
});

function Table() {
  const renderCell = (val) => (
    <span
      className={`${
        val === 'Overdue'
          ? 'bg-red-100 text-red-500 border-[1px] border-red-300'
          : 'bg-orange-100 text-orange-500 border-[1px] border-orange-300'
      }  px-2 py-0.5 rounded-lg mr-1 font-semibold`}
    >
      {val}
    </span>
  );
  const renderDueIn = (val, stat) => (
    <span
      className={`${
        stat === 'Overdue' ? 'text-red-500' : 'text-orange-500'
      }  px-2 py-0.5 mr-1 font-semibold`}
    >
      {val}
    </span>
  );
  return (
    <div className="rounded-md border-[1px] text-[9px] relative overflow-auto">
      <table className="w-full overflow-y-auto">
        <thead>
          <tr>
            <th className="px-2 py-2 rounded-tl-md bg-gray-100 text-left font-semibold text-gray-500 uppercase">
              invoice#
            </th>
            <th className="px-2 py-2 bg-gray-100 text-left font-semibold text-gray-500 uppercase">
              due date
            </th>
            <th className="px-2 py-2 bg-gray-100 text-left font-semibold text-gray-500 uppercase">
              status
            </th>
            <th className="px-2 py-2 bg-gray-100 text-left font-semibold text-gray-500 uppercase">
              due in
            </th>
            <th className="px-2 py-2 rounded-tr-md bg-gray-100 text-left font-semibold text-gray-500 uppercase">
              amount due
            </th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((inv) => (
            <tr key={inv.id}>
              <td className="px-3 py-2">
                <span className="font-semibold text-blue-800">{inv.inv}</span>
              </td>
              <td className="px-3 py-2">{inv.dueDate}</td>
              <td className="px-3 py-2">{renderCell(inv.status)}</td>
              <td className="px-3 py-2">
                {renderDueIn(inv.dueIn, inv.status)}
              </td>
              <td className="px-3 py-2">{inv.amountDue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Accountpayable() {
  const [openTab, setOpenTab] = useState('s');
  return (
    <div className="flex flex-col">
      <div className="font-semibold text-sm text-gray-600">
        Account Payable by Age
      </div>
      {/* Tabs */}
      <div>
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-2 flex-row"
            role="tablist"
          >
            <li className="-mb-px last:mr-0 flex-auto text-center">
              <a
                className={`text-xs font-bold uppercase px-5 py-3 block leading-normal ${
                  openTab === 's'
                    ? 'text-white bg-maha-purple rounded-tr-md rounded-tl-md border-b-2 border-maha-purple'
                    : 'text-gray-500 bg-white border-b-2 border-maha-purple'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab('s');
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                SGD
              </a>
            </li>
            <li className="-mb-px last:mr-0 flex-auto text-center">
              <a
                className={`text-xs font-bold uppercase px-5 py-3 block leading-normal ${
                  openTab === 'us'
                    ? 'text-white bg-maha-purple rounded-tr-md rounded-tl-md border-b-2 border-maha-purple'
                    : 'text-gray-500 bg-white border-b-2 border-maha-purple'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab('us');
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                USD
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-2 ">
            <div className="flex-auto">
              <div className="tab-content tab-space">
                <div
                  className={openTab === 's' ? 'block' : 'hidden'}
                  id="link1"
                >
                  <Bar datas={Data} cur="S" />
                </div>
                <div
                  className={openTab === 'us' ? 'block' : 'hidden'}
                  id="link2"
                >
                  <Bar datas={Data} cur="US" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Table />
    </div>
  );
}
