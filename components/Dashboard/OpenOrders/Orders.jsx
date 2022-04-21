/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-nested-ternary */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from '@nextui-org/react';
import { useEffect, useState } from 'react';

function renderDate(str) {
  const d = str.slice(0, 10);
  const date = new Date(d);
  const poDate = `${
    date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
  }-${
    date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  }-${date.getFullYear()}`;
  return poDate;
}

function OrderDetails({ parentExpanded, details }) {
  const [isExpanded, setIsExpanded] = useState(parentExpanded);
  useEffect(() => setIsExpanded(() => parentExpanded), [parentExpanded]);
  const renderStat = (val) => (
    <span
      className={`${
        val.toLowerCase() === 'unfulfilled'
          ? 'border-red-300 bg-red-100 text-red-500'
          : val.toLowerCase() === 'fulfilled'
          ? 'border-green-300 bg-green-100 text-green-500'
          : 'border-orange-300 bg-orange-100 text-orange-500'
      } mr-1 rounded-md border-[1px] px-2 py-0.5 text-[0.6rem] font-semibold`}
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
      date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    }-${date.getFullYear()}`;
    return poDate;
  }
  function renderColor(str) {
    const d = str.slice(0, 10);
    const date = new Date(d);
    const today = new Date();
    const color = date > today ? 'text-maha-purple font-semibold' : '';
    return color;
  }
  return (
    <tr>
      <td
        colSpan={4}
        className={`${
          !isExpanded ? 'hidden' : ''
        } bg-green-50 py-2 px-5 text-[10px]`}
      >
        <div className="rounded-sm border-[1px]">
          <table className="w-full">
            <thead>
              <tr className="whitespace-nowrap border-b-[1px] border-gray-200 bg-gray-50 text-left uppercase text-gray-400">
                <th className="rounded-tl-md px-3 py-2">item</th>
                <th className="px-3 py-2">open qty</th>
                <th className="px-3 py-2">total qty</th>
                <th className="px-3 py-2">total invoice</th>
                <th className="px-3 py-2">item status</th>
                <th className="rounded-tr-md px-3 py-2">scheduled delivery</th>
              </tr>
            </thead>
            <tbody>
              {details.map((detail, idx) => (
                <tr
                  key={idx}
                  className="border-b-[1px] border-gray-200 bg-white hover:bg-gray-100"
                >
                  <td className="px-3 py-2">{detail.itemName}</td>
                  <td className="px-3 py-2">
                    {`${detail.openQty.toLocaleString()} ${detail.uoM}`}
                  </td>
                  <td className="px-3 py-2">
                    {`${detail.totalQty.toLocaleString()} ${detail.uoM}`}
                  </td>
                  <td className="px-3 py-2">
                    {`${
                      detail.currency
                    } $${detail.totalInvoice.toLocaleString()}`}
                  </td>
                  <td className="px-3 py-2">{renderStat(detail.itemStatus)}</td>
                  <td
                    className={`px-3 py-2 ${renderColor(detail.activityDate)}`}
                  >
                    {`${renderDateReceive(detail.activityDate)} - ${
                      detail.activityQty !== null
                        ? detail.activityQty.toLocaleString()
                        : '0.00'
                    }${detail.uoM} ${detail.activity}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </td>
    </tr>
  );
}

function Items({ data }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(() => !isExpanded);
  };

  const renderStatItem = (val) => (
    <span
      className={`${
        val.toLowerCase() === 'open'
          ? 'border-blue-300 bg-blue-100 text-blue-500'
          : val.toLowerCase() === 'scheduled'
          ? 'border-purple-300 bg-purple-100 text-maha-purple'
          : 'border-gray-300 bg-gray-100 text-gray-500'
      } mr-1 rounded-md border-[1px] px-2 py-0.5 text-[0.6rem] font-semibold`}
    >
      {val}
    </span>
  );

  return (
    <>
      <tr key={data.poNumber} className="text-left hover:bg-gray-100">
        <td className="px-6 py-1.5">
          <Tooltip content="Details" placement="left">
            <button
              className={` inline-flex items-center rounded py-2 px-2 font-bold ${
                isExpanded
                  ? 'bg-green-400 text-white hover:bg-green-100 hover:text-gray-600'
                  : 'bg-gray-100 text-gray-400 hover:bg-gray-300'
              }`}
              onClick={handleClick}
            >
              <FontAwesomeIcon
                icon={faChevronDown}
                transform={isExpanded ? { rotate: 180 } : { rotate: 0 }}
              />
            </button>
          </Tooltip>
        </td>
        <td className="px-6 py-1.5 font-semibold text-blue-500">
          {data.poNumber}
        </td>
        <td className="px-6 py-1.5">{renderDate(data.poReceived)}</td>
        <td className="px-6 py-1.5">{renderStatItem(data.poStatus)}</td>
      </tr>

      <OrderDetails parentExpanded={isExpanded} details={data.details} />
    </>
  );
}

export default function Orders({ items }) {
  return (
    <div className="flex h-[64vh] flex-col rounded-lg">
      <div className="flex-grow overflow-auto rounded-md border-[1px]">
        <table className="relative w-full text-xs">
          <thead>
            <tr className="text-left uppercase">
              <th className="sticky top-0 bg-gray-100 px-6 py-3 text-gray-400" />
              <th className="sticky top-0 bg-gray-100 px-6 py-3 text-gray-400">
                p/o#
              </th>
              <th className="sticky top-0 bg-gray-100 px-6 py-3 text-gray-400">
                po received
              </th>
              <th className="sticky top-0 bg-gray-100 px-6 py-3 text-gray-400">
                po status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white-100">
            {items.map((item, idx) => (
              <Items key={idx} data={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
