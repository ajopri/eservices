import { faCircleInfo, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Tooltip } from '@nextui-org/react';
import Orders from './Orders';
import Datas from './Data';

function Tabs() {
  const [item, setItem] = useState(Datas);
  const [orderStat, setOrderStat] = useState('all');
  const capitalize = (str) => {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
  };
  const filterItem = (curcat) => {
    const newItem = Datas.filter((newVal) =>
      newVal.status.includes(capitalize(curcat))
    );
    setItem(newItem);
  };
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    let result = [];
    result = Datas.filter((data) => data.po.search(value) !== -1);
    setItem(result);
  };
  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <div className="flex items-center text-xs">
          <div className="w-2/4 flex items-center justify-start font-semibold text-gray-600">
            <ul
              className="flex items-center mb-0 list-none pb-3 flex-row"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <button
                  type="button"
                  className={`text-xs font-bold px-5 py-3 block leading-normal ${
                    orderStat === 'all'
                      ? `text-gray-600 border-b-2 border-green-600`
                      : `text-gray-400`
                  }`}
                  onClick={() => {
                    setItem(Datas);
                    setOrderStat('all');
                  }}
                >
                  <span>All</span>{' '}
                  <span
                    className={`${
                      orderStat === 'all'
                        ? 'bg-green-50 text-green-600'
                        : 'bg-gray-100'
                    } px-1 py-0.5 rounded-md`}
                  >
                    32
                  </span>
                </button>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <button
                  type="button"
                  className={`text-xs font-bold px-5 py-3 block leading-normal ${
                    orderStat === 'scheduled'
                      ? `text-gray-600 border-b-2 border-green-600`
                      : `text-gray-400`
                  }`}
                  onClick={() => {
                    filterItem('scheduled');
                    setOrderStat('scheduled');
                  }}
                >
                  <span>Scheduled</span>{' '}
                  <span
                    className={`${
                      orderStat === 'scheduled'
                        ? 'bg-green-50 text-green-600'
                        : 'bg-gray-100'
                    } px-1 py-0.5 rounded-md`}
                  >
                    32
                  </span>
                </button>
              </li>
            </ul>
          </div>
          <div className="w-2/4 flex justify-end">
            <div className="pb-3">
              <span className="pointer-events-none absolute text-gray-300 transform translate-y-1/2">
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <input
                type="text"
                name="search"
                id="search"
                onChange={(event) => handleSearch(event)}
                placeholder="Search"
                className="w-full px-3 py-2 placeholder-gray-300 focus:border-green-700 border-b-2 border-gray-300 pl-7 focus:outline-none focus:ring-0 "
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col min-w-0 break-words bg-white w-full">
          <div className="flex-auto">
            <div className="tab-content tab-space">
              <div>
                <Orders items={item} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Openorders() {
  return (
    <>
      <div className="py-3 font-semibold text-maha-purple flex items-center">
        Open Orders{' '}
        <Tooltip
          content="Only outstanding & unfulfilled orders are displayed."
          placement="right"
        >
          <span className="text-gray-400 ml-2">
            <FontAwesomeIcon icon={faCircleInfo} />
          </span>
        </Tooltip>
      </div>
      <div className="container bg-white rounded-md shadow-sm p-4 border-[1px] border-gray-200">
        <Tabs />
      </div>
    </>
  );
}
