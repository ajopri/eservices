/* eslint-disable react/no-array-index-key */
/* eslint-disable array-callback-return */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable import/no-unresolved */
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from '@nextui-org/react';
import { useEffect, useState } from 'react';

const renderCell = (val) => (
  <span
    key={val}
    className={`${
      val === 'Open'
        ? 'bg-blue-100 text-blue-500 border-2 border-blue-300'
        : val === 'Scheduled'
        ? 'bg-purple-100 text-maha-purple border-2 border-purple-300'
        : 'bg-gray-100 text-gray-500 border-2 border-gray-300'
    }  px-2 py-0.5 rounded-md mr-1 font-semibold`}
  >
    {val}
  </span>
);
function renderDateReceive(str) {
  const d = str.slice(0, 10);
  const date = new Date(d);
  const poDate = `${
    date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
  }-${
    date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  }-${date.getFullYear()}`;
  return <span>{poDate}</span>;
}

function OrderDetails({ parentExpanded, details }) {
  const [isExpanded, setIsExpanded] = useState(parentExpanded);
  useEffect(() => setIsExpanded(() => parentExpanded), [parentExpanded]);
  const renderStat = (val) => (
    <span
      className={`${
        val.toLowerCase() === 'unfulfilled'
          ? 'bg-red-100 text-red-500 border-[1px] border-red-300'
          : val.toLowerCase() === 'fulfilled'
          ? 'bg-green-100 text-green-500 border-[1px] border-green-300'
          : 'bg-orange-100 text-orange-500 border-[1px] border-orange-300'
      }  px-2 py-0.5 rounded-md mr-1 font-semibold text-[0.6rem]`}
    >
      {val}
    </span>
  );

  return (
    <div
      className={`${!isExpanded ? 'hidden' : 'block'} bg-green-50 py-2 px-5`}
    >
      <div className="rounded-sm border-[1px]">
        <table className="w-full">
          <thead>
            <tr className="uppercase bg-gray-50 text-gray-400 border-b-[1px] border-gray-200">
              <th className="px-3 py-2 rounded-tl-md">item name</th>
              <th className="px-3 py-2">open qty</th>
              <th className="px-3 py-2">total qty</th>
              <th className="px-3 py-2">unit price</th>
              <th className="px-3 py-2">total invoice</th>
              <th className="px-3 py-2">item status</th>
              <th className="px-3 py-2 rounded-tr-md">latest activity</th>
            </tr>
          </thead>
          <tbody>
            {details.map((detail, idx) => (
              <tr key={idx} className="bg-white border-b-[1px] border-gray-200">
                <td className="px-3 py-2">{detail.itemName}</td>
                <td className="px-3 py-2">{detail.openQty.toLocaleString()}</td>
                <td className="px-3 py-2">
                  {detail.totalQty.toLocaleString()}
                </td>
                <td className="px-3 py-2">
                  {detail.unitPrice.toLocaleString()}
                </td>
                <td className="px-3 py-2">
                  {`${
                    detail.currency
                  } $${detail.totalInvoice.toLocaleString()}/${detail.uoM}`}
                </td>
                <td className="px-3 py-2">{renderStat(detail.itemStatus)}</td>
                <td className="px-3 py-2">
                  {`${detail.activityQty}${detail.uoM} ${detail.activity}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Item({ data }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(() => !isExpanded);
  };

  return (
    <li key={data.poNumber} className="flex flex-col w-full hover:bg-gray-100">
      <div className="flex flex-row items-center">
        <div
          className="py-1 px-2 sm:px-5 flex-1 sm:basis-1/12"
          onClick={handleClick}
        >
          <Tooltip content="Details" placement="left">
            <button
              className={` font-bold py-2 px-2 rounded inline-flex items-center ${
                isExpanded
                  ? 'text-white bg-green-400 hover:bg-green-100 hover:text-gray-600'
                  : 'text-gray-400 bg-gray-100 hover:bg-gray-300'
              }`}
            >
              <FontAwesomeIcon
                icon={faChevronDown}
                transform={isExpanded ? { rotate: 180 } : { rotate: 0 }}
              />
            </button>
          </Tooltip>
        </div>
        <div className="py-1 px-2 sm:px-5 flex-1 sm:basis-4/12 text-blue-700 font-semibold">
          {data.poNumber}
        </div>
        <div className="py-1 px-2 sm:px-5 flex-1 sm:basis-4/12">
          {renderDateReceive(data.poReceived)}
        </div>
        <div className="py-1 px-2 sm:px-5 flex-1 sm:basis-4/12">
          {renderCell(data.poStatus)}
        </div>
      </div>
      <OrderDetails parentExpanded={isExpanded} details={data.details} />
    </li>
  );
}

export default function OrderByPo({ datas }) {
  return (
    <div className="flex flex-col rounded-lg border-[1px] h-[64vh]">
      <div className="py-3 bg-gray-100 text-gray-600 font-semibold text-[0.75rem] ">
        <ul>
          <li className="flex flex-row uppercase">
            <div className="flex-1 sm:basis-1/12 px-4" />
            <div className="flex-1 sm:basis-4/12 px-4">po</div>
            <div className="flex-1 sm:basis-3/12 px-4">po received</div>
            <div className="flex-1 sm:basis-4/12 px-4">status</div>
          </li>
        </ul>
      </div>
      <div className="overflow-y-auto text-[0.7rem] pt-2">
        <ul>
          {datas.map((data, idx) => (
            <Item key={idx} data={data} />
          ))}
        </ul>
      </div>
    </div>
  );
}
