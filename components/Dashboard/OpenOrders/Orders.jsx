/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import Orderdetail from './OrderDetail';

const renderCell = (val) =>
  val.map((v) => (
    <span
      key={v}
      className={`${
        v === 'Open'
          ? 'bg-blue-100 text-blue-500 border-2 border-blue-300'
          : 'bg-purple-100 text-maha-purple border-2 border-purple-300'
      }  px-2 py-0.5 rounded-md mr-1 font-semibold`}
    >
      {v}
    </span>
  ));

function SubTasks({ parentExpanded, po }) {
  const [isExpanded, setIsExpanded] = useState(parentExpanded);
  useEffect(() => setIsExpanded(() => parentExpanded), [parentExpanded]);
  return <Orderdetail isExpanded={isExpanded} po={po} />;
}

function OrderItem({ id, po, received, status }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(() => !isExpanded);
  };

  return (
    <li key={id} className="flex flex-col w-full hover:bg-gray-100">
      <div className="flex flex-row items-center">
        <div className="py-1 px-5 flex-none " onClick={handleClick}>
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
        <div className="py-1 px-5 flex-1 text-blue-700 font-semibold">{po}</div>
        <div className="py-1 px-5 flex-1">{received}</div>
        <div className="py-1 px-5 flex-1">{renderCell(status)}</div>
      </div>
      <SubTasks parentExpanded={isExpanded} po={po} />
    </li>
  );
}

export default function Orders({ items }) {
  return (
    <div className="flex flex-col rounded-lg border-[1px] h-[64vh]">
      <div className="py-3 bg-gray-100 text-gray-600 font-semibold text-[0.75rem] mb-2">
        <ul>
          <li className="flex flex-row ">
            <div className="flex-none px-7" />
            <div className="flex-1 px-7">P/O#</div>
            <div className="flex-1 px-7">PO Received</div>
            <div className="flex-1 px-7">PO Status</div>
          </li>
        </ul>
      </div>
      <div className="overflow-y-auto text-[0.7rem]">
        <ul>
          {items.map(({ id, po, received, status }) => (
            <OrderItem key={id} po={po} received={received} status={status} />
          ))}
        </ul>
      </div>
    </div>
  );
}
