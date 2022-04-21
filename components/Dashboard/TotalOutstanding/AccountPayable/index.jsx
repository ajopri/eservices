/* eslint-disable react/no-array-index-key */
/* eslint-disable array-callback-return */
import dynamic from 'next/dynamic';
import { useState } from 'react';

const Bar = dynamic(() => import('./Bar'), {
  ssr: false,
});

function TableInv({ invoices }) {
  const renderCell = (val) => (
    <span
      className={`${
        val === 'Overdue'
          ? 'border-red-300 bg-red-100 text-red-500'
          : 'border-orange-300 bg-orange-100 text-orange-500'
      } mr-1 rounded-lg border-[1px] px-2 py-0.5 font-semibold`}
    >
      {val}
    </span>
  );
  const renderDueIn = (val, stat) => (
    <span
      className={`${
        stat === 'Overdue' ? 'text-red-500' : 'text-orange-500'
      }  mr-1 px-2 py-0.5 font-semibold`}
    >
      {val}
    </span>
  );
  return (
    <div className="h-44 overflow-auto rounded-md border-[1px] text-[9px]">
      <table className="relative w-full">
        <thead>
          <tr>
            <th className="sticky top-0 rounded-tl-md bg-gray-100 px-2 py-2 text-left font-semibold uppercase text-gray-500">
              invoice#
            </th>
            <th className="sticky top-0 bg-gray-100 px-2 py-2 text-left font-semibold uppercase text-gray-500">
              due date
            </th>
            <th className="sticky top-0 bg-gray-100 px-2 py-2 text-left font-semibold uppercase text-gray-500">
              status
            </th>
            <th className="sticky top-0 bg-gray-100 px-2 py-2 text-left font-semibold uppercase text-gray-500">
              due in
            </th>
            <th className="sticky top-0 rounded-tr-md bg-gray-100 px-2 py-2 text-left font-semibold uppercase text-gray-500">
              amount due
            </th>
          </tr>
        </thead>
        <tbody>
          {invoices.data.map((inv, idx) => (
            <tr key={idx} className="hover:bg-gray-100">
              <td className="px-3 py-2">
                <span className="font-semibold text-blue-800">
                  {inv.invNumber}
                </span>
              </td>
              <td className="px-3 py-2">{inv.dueDate}</td>
              <td className="px-3 py-2">{renderCell(inv.invStatus)}</td>
              <td className="px-3 py-2">
                {renderDueIn(inv.dueIn, inv.invStatus)}
              </td>
              <td className="px-3 py-2">{inv.amountDue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Accountpayable({ dataPayable, openInv }) {
  const datas = dataPayable.data;
  const [openTab, setOpenTab] = useState(datas[0].foreignCurrency);
  let LC = [];
  let FC = [];
  datas.map((data) => {
    LC = [
      { day: '90+ days', amount: data.aging_90_LC, color: '#DE1B1B' },
      { day: '61-90 days', amount: data.aging_61_90LC, color: '#FA8E8E' },
      { day: '31-60 days', amount: data.aging_31_60LC, color: '#F5BC76' },
      { day: '0-30 days', amount: data.aging_0_30LC, color: '#FFDE86' },
      { day: 'Not Due', amount: data.aging_Future_RemitLC, color: '#8CC73F' },
    ];
    FC = [
      { day: '90+ days', amount: data.aging_90_FC, color: '#DE1B1B' },
      { day: '61-90 days', amount: data.aging_61_90FC, color: '#FA8E8E' },
      { day: '31-60 days', amount: data.aging_31_60FC, color: '#F5BC76' },
      { day: '0-30 days', amount: data.aging_0_30FC, color: '#FFDE86' },
      { day: 'Not Due', amount: data.aging_Future_RemitFC, color: '#8CC73F' },
    ];
  });
  return (
    <div className="flex flex-col">
      <div className="text-sm font-semibold text-gray-600">
        Account Payable by Age
      </div>
      {/* Tabs */}
      <div>
        <div className="w-full">
          <ul
            className="mb-0 flex list-none flex-row flex-wrap pt-3 pb-2"
            role="tablist"
          >
            <li className="-mb-px flex-auto text-center last:mr-0">
              <a
                className={`block px-5 py-3 text-xs font-bold uppercase leading-normal ${
                  openTab === datas[0].foreignCurrency
                    ? 'rounded-tr-md rounded-tl-md border-b-2 border-maha-purple bg-maha-purple text-white'
                    : 'border-b-2 border-maha-purple bg-white text-gray-500'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(datas[0].foreignCurrency);
                }}
                data-toggle="tab"
                href={`#${datas[0].foreignCurrency}`}
                role="tablist"
              >
                {datas[0].foreignCurrency}
              </a>
            </li>
            <li className="-mb-px flex-auto text-center last:mr-0">
              <a
                className={`block px-5 py-3 text-xs font-bold uppercase leading-normal ${
                  openTab === datas[0].localCurrency
                    ? 'rounded-tr-md rounded-tl-md border-b-2 border-maha-purple bg-maha-purple text-white'
                    : 'border-b-2 border-maha-purple bg-white text-gray-500'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(datas[0].localCurrency);
                }}
                data-toggle="tab"
                href={`#${datas[0].localCurrency}`}
                role="tablist"
              >
                {datas[0].localCurrency}
              </a>
            </li>
          </ul>
          <div className="relative mb-2 flex w-full min-w-0 flex-col break-words bg-white ">
            <div className="flex-auto">
              <div className="tab-content tab-space">
                <div
                  className={
                    openTab === datas[0].localCurrency ? 'block' : 'hidden'
                  }
                  id={datas[0].localCurrency}
                >
                  <Bar datas={LC} cur={datas[0].localCurrency} />
                </div>
                <div
                  className={
                    openTab === datas[0].foreignCurrency ? 'block' : 'hidden'
                  }
                  id={datas[0].foreignCurrency}
                >
                  <Bar datas={FC} cur={datas[0].foreignCurrency} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TableInv invoices={openInv} />
    </div>
  );
}
