/* eslint-disable react/button-has-type */
import {
  faChevronDown,
  faCircleInfo,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from '@nextui-org/react';

export default function Openorders() {
  const orders = [
    {
      id: 1,
      po: 'NP-4512732',
      received: '21-05-2019',
      status: ['Open', 'Scheduled'],
    },
    {
      id: 2,
      po: 'NP-0923818',
      received: '08-02-2020',
      status: ['Open', 'Scheduled'],
    },
    {
      id: 3,
      po: 'NP-9513465',
      received: '10-07-2021',
      status: ['Open', 'Scheduled'],
    },
    {
      id: 4,
      po: 'NP-2381943',
      received: '22-09-2021',
      status: ['Open'],
    },
    {
      id: 5,
      po: 'NP-3291047',
      received: '03-10-2021',
      status: ['Open'],
    },
    {
      id: 6,
      po: 'NP-3298104',
      received: '31-10-2021',
      status: ['Open'],
    },
    {
      id: 7,
      po: 'NP-9513465',
      received: '12-11-2021',
      status: ['Open'],
    },
    {
      id: 8,
      po: 'NP-7583219',
      received: '24-11-2021',
      status: ['Open'],
    },
    {
      id: 9,
      po: 'NP-7583219',
      received: '09-12-2021',
      status: ['Open'],
    },
    {
      id: 10,
      po: 'NP-7583219',
      received: '24-01-2022',
      status: ['Open'],
    },
  ];

  const renderCell = (val) =>
    val.map((v) => (
      <span
        className={`${
          v === 'Open'
            ? 'bg-blue-100 text-blue-500 border-2 border-blue-300'
            : 'bg-purple-100 text-maha-purple border-2 border-purple-300'
        }  px-2 py-0.5 rounded-lg mr-1 font-semibold`}
      >
        {v}
      </span>
    ));
  return (
    <>
      <div className="py-3 font-semibold text-maha-purple">
        Open Orders{' '}
        <span className="text-gray-400">
          <FontAwesomeIcon icon={faCircleInfo} />
        </span>
      </div>
      <div className="container bg-white rounded-md shadow-xl h-auto p-4">
        <div className="flex items-center py-2 text-xs">
          <div className="w-1/4 flex items-center justify-evenly font-semibold text-gray-600">
            <div className="border-b-2 border-green-600 py-2 px-3">
              <span className="text-gray-600">All</span>{' '}
              <span className="bg-green-50 text-green-600 px-1 py-0.5 rounded-md">
                32
              </span>
            </div>
            <div className="active:border-b-2 active:border-green-600 py-2 px-3">
              <span className="active:text-gray-600 text-gray-400">
                Scheduled
              </span>{' '}
              <span className="active:bg-green-50 bg-gray-100 active:text-green-600 px-1 py-0.5 rounded-md">
                3
              </span>
            </div>
          </div>
          <div className="w-3/4 flex justify-end">
            <div>
              <span className="pointer-events-none absolute text-gray-300 transform translate-y-1/2">
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search"
                className="w-full px-3 py-2 placeholder-gray-300 focus:border-green-700 border-b-2 border-gray-300 pl-7 focus:outline-none focus:ring-0 "
              />
            </div>
          </div>
        </div>
        <div className="inline-block min-w-full shadow-md rounded-sm text-xs overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  &nbsp;
                </th>
                <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  P/O#
                </th>
                <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  PO received
                </th>
                <th className="px-3 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  PO status
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="px-3 py-2">
                    <Tooltip content="Details" placement="right">
                      <button
                        onClick={() => console.log('View user', order.id)}
                        className="bg-gray-100 hover:bg-gray-300 text-gray-800 font-bold py-2 px-2 rounded inline-flex items-center"
                      >
                        <FontAwesomeIcon icon={faChevronDown} />
                      </button>
                    </Tooltip>
                  </td>
                  <td className="px-3 py-2">
                    <span className="font-semibold text-blue-800">
                      {order.po}
                    </span>
                  </td>
                  <td className="px-3 py-2">{order.received}</td>
                  <td className="px-3 py-2">{renderCell(order.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
