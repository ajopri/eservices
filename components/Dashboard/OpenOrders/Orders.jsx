/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from '@nextui-org/react';
import { useEffect, useState } from 'react';

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
  return (
    <ul className={`${!isExpanded ? 'hidden' : 'block'}`}>
      <li>
        <div className="bg-green-50 mb-2 py-3 px-4">
          <h3>Title: {po}</h3>
          <h4>Summary: summary</h4>
          <h4>Status: status</h4>
          <p>descripiton</p>
        </div>
      </li>
    </ul>
  );
}

function OrderItem({ id, po, received, status }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(() => !isExpanded);
  };

  return (
    <li key={id} className="flex flex-col w-full">
      <div className="flex flex-row">
        <div className="py-2 px-5 flex-none " onClick={handleClick}>
          <Tooltip content="Details" placement="right">
            <button
              className={` font-bold py-2 px-2 rounded inline-flex items-center ${
                isExpanded
                  ? 'text-white bg-green-300 hover:bg-green-100 hover:text-gray-600'
                  : 'text-gray-800 bg-gray-100 hover:bg-gray-300'
              }`}
            >
              <FontAwesomeIcon
                icon={faChevronDown}
                transform={isExpanded ? { rotate: 180 } : { rotate: 0 }}
              />
            </button>
          </Tooltip>
        </div>
        <div className="py-2 px-5 flex-1">{po}</div>
        <div className="py-2 px-5 flex-1">{received}</div>
        <div className="py-2 px-5 flex-1">{renderCell(status)}</div>
      </div>
      <SubTasks parentExpanded={isExpanded} po={po} />
    </li>
  );
}

export default function Orders({ item }) {
  const [openChild, setOpenChild] = useState(true);
  const handleRow = () => {
    setOpenChild(!openChild);
  };

  return (
    <div className="rounded-lg border-[1px] relative overflow-auto h-[64vh]">
      <table className="w-full overflow-y-auto table-auto hidden text-[0.65rem] ">
        <thead>
          <tr>
            <th className="px-3 py-3 rounded-tl-md bg-gray-100 text-left font-semibold text-gray-500 uppercase tracking-wider">
              &nbsp;
            </th>
            <th className="px-3 py-3 bg-gray-100 text-left font-semibold text-gray-500 uppercase tracking-wider">
              P/O#
            </th>
            <th className="px-3 py-3 bg-gray-100 text-left font-semibold text-gray-500 uppercase tracking-wider">
              PO received
            </th>
            <th className="px-3 py-3 rounded-tr-md bg-gray-100 text-left font-semibold text-gray-500 uppercase tracking-wider">
              PO status
            </th>
          </tr>
        </thead>
        <tbody>
          {item.map((order) => (
            <tr key={order.id}>
              <td className="px-3 py-2">
                <Tooltip content="Details" placement="right">
                  <button
                    onClick={handleRow}
                    className="bg-gray-100 hover:bg-gray-300 text-gray-800 font-bold py-2 px-2 rounded inline-flex items-center"
                  >
                    <FontAwesomeIcon
                      icon={openChild ? faChevronUp : faChevronDown}
                    />
                  </button>
                </Tooltip>
              </td>
              <td className="px-3 py-2">
                <span className="font-semibold text-blue-800">{order.po}</span>
              </td>
              <td className="px-3 py-2">{order.received}</td>
              <td className="px-3 py-2">{renderCell(order.status)}</td>
            </tr>
          ))}
          <tr className={`${openChild ? 'block' : 'hidden'}`}>
            <td colSpan={4}>test</td>
          </tr>
        </tbody>
      </table>

      <ul className="mx-auto flex flex-col w-full overflow-y-auto text-[0.6rem]">
        <li className="flex flex-row py-3 mb-2 bg-gray-200 text-gray-600 font-semibold">
          <div className="flex-none px-7" />
          <div className="flex-1 px-7">P/O#</div>
          <div className="flex-1 px-7">PO Received</div>
          <div className="flex-1 px-7">PO Status</div>
        </li>
        {item.map(({ id, po, received, status }) => (
          <OrderItem key={id} po={po} received={received} status={status} />
        ))}
      </ul>
    </div>
  );
}
