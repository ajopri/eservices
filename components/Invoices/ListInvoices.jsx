/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable no-nested-ternary */
import { faChevronDown, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from '@nextui-org/react';
import Link from 'next/link';
import { useState } from 'react';

const renderDue = (val) => (
  <span
    key={val}
    className={`${
      val === 'Open'
        ? 'text-blue-500'
        : val === 'Scheduled'
        ? 'text-maha-purple'
        : 'text-gray-500'
    }  mr-1 rounded-md px-2 py-0.5 font-semibold`}
  >
    {val}
  </span>
);

function renderStatus(stat) {
  let className;
  switch (stat.toLowerCase()) {
    case 'paid':
      className = 'border-green-300 bg-green-100 text-green-500';
      break;
    case 'overdue':
      className = 'border-red-300 bg-red-100 text-red-500';
      break;
    case 'outstanding':
      className = 'border-orange-300 bg-orange-100 text-orange-500';
      break;
    default:
      className = 'border-gray-300 bg-gray-100 text-gray-500';
      break;
  }

  return (
    <span
      className={`${className} mr-1 rounded-md border-2 px-2 py-0.5 font-semibold`}
    >
      {stat}
    </span>
  );
}

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
        <span className="cursor-pointer whitespace-nowrap rounded bg-green-100 px-2 py-1 font-semibold uppercase text-green-700">
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
        <td className="whitespace-nowrap px-6 py-1.5 text-left">
          <RenderLinkInvoice link="#" />{' '}
        </td>
      </tr>

      {/* <OrderDetails parentExpanded={isExpanded} details={data.details} /> */}
    </>
  );
}

export default function Listinvoices({ datas }) {
  return (
    <div className="flex h-[64vh] flex-col rounded-lg">
      <div className="flex-grow overflow-auto rounded-md border-[1px]">
        <table className="relative w-full text-xs">
          <thead>
            <tr className="text-left uppercase">
              <th className="sticky top-0 bg-gray-100 px-6 py-3 text-gray-400" />
              <th className="sticky top-0 bg-gray-100 px-6 py-3 text-gray-400">
                invoice#
              </th>
              <th className="sticky top-0 bg-gray-100 px-6 py-3 text-gray-400">
                issue date
              </th>
              <th className="sticky top-0 bg-gray-100 px-6 py-3 text-gray-400">
                due date
              </th>
              <th className="sticky top-0 bg-gray-100 px-6 py-3 text-gray-400">
                status
              </th>
              <th className="sticky top-0 bg-gray-100 px-6 py-3 text-gray-400">
                due in
              </th>
              <th className="sticky top-0 bg-gray-100 px-6 py-3 text-gray-400">
                amount due
              </th>
              <th className="sticky top-0 bg-gray-100 px-6 py-3 text-gray-400">
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
