/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable import/no-unresolved */
import DataByItem from '@components/OrderManagement/DataByItem';
import { faChevronDown, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from '@nextui-org/react';
import Link from 'next/link';
import { useState } from 'react';

const renderCell = (val) =>
  val.map((v) => (
    <span
      key={v}
      className={`${
        v === 'Open PO'
          ? 'bg-blue-100 text-blue-500 border-2 border-blue-300'
          : 'bg-purple-100 text-maha-purple border-2 border-purple-300'
      }  px-2 py-0.5 rounded-md mr-1 font-semibold`}
    >
      {v}
    </span>
  ));
function Item({ id, name, status, tds, sds }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(() => !isExpanded);
  };

  return (
    <li key={id} className="flex flex-col w-full">
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
          {name}
        </div>
        <div className="py-1 px-2 sm:px-5 flex-1 sm:basis-4/12">
          {renderCell(status)}
        </div>
        <div className="py-1 px-2 sm:px-5 flex-1 sm:basis-3/12 space-x-1">
          <Link href={tds} passHref>
            <span className="bg-green-100 rounded text-green-700 font-semibold px-2 py-1 cursor-pointer">
              <FontAwesomeIcon icon={faDownload} /> TDS
            </span>
          </Link>
          <Link href={sds} passHref>
            <span className="bg-green-100 rounded text-green-700 font-semibold px-2 py-1 cursor-pointer">
              <FontAwesomeIcon icon={faDownload} /> SDS
            </span>
          </Link>
        </div>
      </div>
      {/* <SubTasks parentExpanded={isExpanded} po={po} /> */}
    </li>
  );
}

export default function OrderByItem() {
  return (
    <div className="flex flex-col rounded-lg border-[1px] h-[64vh]">
      <div className="py-3 bg-gray-100 text-gray-600 font-semibold text-[0.75rem] ">
        <ul>
          <li className="flex flex-row uppercase">
            <div className="flex-1 sm:basis-1/12 px-4" />
            <div className="flex-1 sm:basis-4/12 px-4">name</div>
            <div className="flex-1 sm:basis-4/12 px-4">status</div>
            <div className="flex-1 sm:basis-3/12 px-4">download</div>
          </li>
        </ul>
      </div>
      <div className="overflow-y-auto text-[0.7rem] pt-2">
        <ul>
          {DataByItem.map(({ id, name, status, TDSlink, SDSlink }) => (
            <Item
              key={id}
              id={id}
              name={name}
              status={status}
              tds={TDSlink}
              sds={SDSlink}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
