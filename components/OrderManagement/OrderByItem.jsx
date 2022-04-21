/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable import/no-unresolved */
// import DataByItem from '@components/OrderManagement/DataByItem';
import { faChevronDown, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from '@nextui-org/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const renderCell = (val) => (
  <span
    key={val}
    className={`${
      val === 'Open'
        ? 'border-2 border-blue-300 bg-blue-100 text-blue-500'
        : val === 'Scheduled'
        ? 'border-2 border-purple-300 bg-purple-100 text-maha-purple'
        : 'border-2 border-gray-300 bg-gray-100 text-gray-500'
    }  mr-1 rounded-md px-2 py-0.5 font-semibold`}
  >
    {val}
  </span>
);

function OrderDetails({ parentExpanded, details }) {
  const [isExpanded, setIsExpanded] = useState(parentExpanded);
  useEffect(() => setIsExpanded(() => parentExpanded), [parentExpanded]);
  const renderStat = (val) => (
    <span
      className={`${
        val.toLowerCase() === 'unfulfilled'
          ? 'border-[1px] border-red-300 bg-red-100 text-red-500'
          : val.toLowerCase() === 'fulfilled'
          ? 'border-[1px] border-green-300 bg-green-100 text-green-500'
          : 'border-[1px] border-orange-300 bg-orange-100 text-orange-500'
      }  mr-1 rounded-md px-2 py-0.5 text-[0.6rem] font-semibold`}
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
        className={`${!isExpanded ? 'hidden' : ''} bg-green-50 py-2 px-5`}
      >
        <div className="rounded-sm border-[1px]">
          <table className="w-full">
            <thead>
              <tr className="border-b-[1px] border-gray-200 bg-gray-50 text-left uppercase text-gray-400">
                <th className="rounded-tl-md px-3 py-2">P/O#</th>
                <th className="px-3 py-2">po received</th>
                <th className="px-3 py-2">open qty</th>
                <th className="px-3 py-2">total qty</th>
                <th className="px-3 py-2">unit price</th>
                <th className="px-3 py-2">total invoice</th>
                <th className="px-3 py-2">item status</th>
                <th className="rounded-tr-md px-3 py-2">latest activity</th>
              </tr>
            </thead>
            <tbody>
              {details.map((detail, idx) => (
                <tr
                  key={idx}
                  className="border-b-[1px] border-gray-200 bg-white hover:bg-gray-100"
                >
                  <td className="px-3 py-2 text-blue-500">{detail.poNumber}</td>
                  <td className="px-3 py-2">
                    {renderDateReceive(detail.poReceived)}
                  </td>
                  <td className="px-3 py-2">
                    {`${detail.openQty.toLocaleString()} ${detail.uoM}`}
                  </td>
                  <td className="px-3 py-2">
                    {`${detail.totalQty.toLocaleString()} ${detail.uoM}`}
                  </td>
                  <td className="px-3 py-2">
                    {`${
                      detail.currency
                    } $${detail.unitPrice.toLocaleString()}/${detail.uoM}`}
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
                      detail.activityQty
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

function RenderLinkTds({ link }) {
  if (link) {
    return (
      <Link href={link} passHref>
        <span className="cursor-pointer whitespace-nowrap rounded bg-green-100 px-2 py-1 font-semibold text-green-700">
          <FontAwesomeIcon icon={faDownload} /> TDS
        </span>
      </Link>
    );
  }
}
function RenderLinksds({ link }) {
  if (link) {
    return (
      <Link href={link} passHref>
        <span className="cursor-pointer whitespace-nowrap rounded bg-green-100 px-2 py-1 font-semibold text-green-700">
          <FontAwesomeIcon icon={faDownload} /> SDS
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
        <td className="px-6 py-1.5 text-left">{data.itemName}</td>
        <td className="px-6 py-1.5 text-left">{renderCell(data.poStatus)}</td>
        <td className="whitespace-nowrap px-6 py-1.5 text-left">
          <RenderLinkTds link={data.tdsLink} />{' '}
          <RenderLinksds link={data.sdsLink} />
        </td>
      </tr>

      <OrderDetails parentExpanded={isExpanded} details={data.details} />
    </>
  );
}

export default function OrderByItem({ datas }) {
  return (
    <div className="flex h-[64vh] flex-col rounded-lg">
      <div className="flex-grow overflow-auto rounded-md border-[1px]">
        <table className="relative w-full text-xs">
          <thead>
            <tr className="text-left uppercase">
              <th className="sticky top-0 bg-gray-100 px-6 py-3 text-gray-400" />
              <th className="sticky top-0 bg-gray-100 px-6 py-3 text-gray-400">
                name
              </th>
              <th className="sticky top-0 bg-gray-100 px-6 py-3 text-gray-400">
                status
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
