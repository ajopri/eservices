/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable no-nested-ternary */
import { faChevronDown, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from '@nextui-org/react';
import Link from 'next/link';
import { useState } from 'react';

const renderStatus = (val) => (
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

const renderDue = (val) => (
  <span
    key={val}
    className={`${
      val === 'Open'
        ? 'text-blue-500'
        : val === 'Scheduled'
        ? 'text-maha-purple'
        : 'text-gray-500'
    }  px-2 py-0.5 rounded-md mr-1 font-semibold`}
  >
    {val}
  </span>
);

function renderDate(str) {
  const d = str.slice(0, 10);
  const date = new Date(d);
  const poDate = `${
    date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
  }-${
    date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  }-${date.getFullYear()}`;
  return <span>{poDate}</span>;
}

function RenderLinkInvoice({ link }) {
  if (link) {
    return (
      <Link href={link} passHref>
        <span className="bg-green-100 uppercase rounded text-green-700 font-semibold px-2 py-1 cursor-pointer whitespace-nowrap">
          <FontAwesomeIcon icon={faDownload} /> invoice
        </span>
      </Link>
    );
  }
}

// Item
function Item({ data }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(() => !isExpanded);
  };

  return (
    <>
      <tr key={data.itemCode} className="hover:bg-gray-100">
        <td className="px-6 py-1.5 text-left">
          <Tooltip content="Details" placement="left">
            <button
              className={` font-bold py-2 px-2 rounded inline-flex items-center ${
                isExpanded
                  ? 'text-white bg-green-400 hover:bg-green-100 hover:text-gray-600'
                  : 'text-gray-400 bg-gray-100 hover:bg-gray-300'
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
        <td className="px-6 py-1.5 text-left">{data.invNumber}</td>
        <td className="px-6 py-1.5 text-left">{renderDate(data.issueDate)}</td>
        <td className="px-6 py-1.5 text-left">{renderDate(data.dueDate)}</td>
        <td className="px-6 py-1.5 text-left">
          {renderStatus(data.invStatus)}
        </td>
        <td className="px-6 py-1.5 text-left">{renderDue(data.dueIn)}</td>
        <td className="px-6 py-1.5 text-left">
          {data.amountDue.toLocaleString()}
        </td>
        <td className="px-6 py-1.5 text-left whitespace-nowrap">
          <RenderLinkInvoice link="#" />{' '}
        </td>
      </tr>

      {/* <OrderDetails parentExpanded={isExpanded} details={data.details} /> */}
    </>
  );
}

export default function Listinvoices({ datas }) {
  return (
    <div className="flex flex-col rounded-lg h-[64vh]">
      <div className="flex-grow overflow-auto border-[1px] rounded-md">
        <table className="relative w-full text-xs">
          <thead>
            <tr className="uppercase text-left">
              <th className="sticky top-0 px-6 py-3 text-gray-400 bg-gray-100" />
              <th className="sticky top-0 px-6 py-3 text-gray-400 bg-gray-100">
                invoice#
              </th>
              <th className="sticky top-0 px-6 py-3 text-gray-400 bg-gray-100">
                issue date
              </th>
              <th className="sticky top-0 px-6 py-3 text-gray-400 bg-gray-100">
                due date
              </th>
              <th className="sticky top-0 px-6 py-3 text-gray-400 bg-gray-100">
                status
              </th>
              <th className="sticky top-0 px-6 py-3 text-gray-400 bg-gray-100">
                due in
              </th>
              <th className="sticky top-0 px-6 py-3 text-gray-400 bg-gray-100">
                amount due
              </th>
              <th className="sticky top-0 px-6 py-3 text-gray-400 bg-gray-100">
                download
              </th>
            </tr>
          </thead>
          <tbody className="bg-white-100">
            {datas.map((data, idx) => (
              <Item key={idx} data={data} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
