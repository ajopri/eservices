import { faCircleInfo, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Tooltip } from '@nextui-org/react';
import Orders from './Orders';

export default function Openorders({ dataOpenPo }) {
  const [item, setItem] = useState(dataOpenPo.data);
  const [orderStat, setOrderStat] = useState('all');
  const [countScheduled, setcountScheduled] = useState(0);
  const capitalize = (str) => {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
  };
  const filterItem = (curcat) => {
    const newItem = dataOpenPo.data.filter((newVal) =>
      newVal.poStatus.includes(capitalize(curcat))
    );
    setItem(newItem);
    setcountScheduled(newItem.length);
  };
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    let result = [];
    result = dataOpenPo.data.filter(
      (data) => data.poNumber.search(value) !== -1
    );
    setItem(result);
  };
  return (
    <>
      <div className="flex items-center py-3 font-semibold text-maha-purple">
        Open Orders{' '}
        <Tooltip
          content="Only outstanding & unfulfilled orders are displayed."
          placement="right"
        >
          <span className="ml-2 text-gray-400">
            <FontAwesomeIcon icon={faCircleInfo} />
          </span>
        </Tooltip>
      </div>
      <div className="container rounded-md border-[1px] border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="flex items-center text-xs">
              <div className="flex w-2/4 items-center justify-start font-semibold text-gray-600">
                <ul
                  className="mb-0 flex list-none flex-row items-center pb-3"
                  role="tablist"
                >
                  <li className="-mb-px mr-2 flex-auto text-center last:mr-0">
                    <button
                      type="button"
                      className={`block px-5 py-3 text-xs font-bold leading-normal ${
                        orderStat === 'all'
                          ? `border-b-2 border-green-600 text-gray-600`
                          : `text-gray-400`
                      }`}
                      onClick={() => {
                        setItem(dataOpenPo.data);
                        setOrderStat('all');
                      }}
                    >
                      <span>All</span>{' '}
                      <span
                        className={`${
                          orderStat === 'all'
                            ? 'bg-green-50 text-green-600'
                            : 'bg-gray-100'
                        } rounded-md px-1 py-0.5`}
                      >
                        {dataOpenPo.data.length}
                      </span>
                    </button>
                  </li>
                  <li className="-mb-px mr-2 flex-auto text-center last:mr-0">
                    <button
                      type="button"
                      className={`block px-5 py-3 text-xs font-bold leading-normal ${
                        orderStat === 'scheduled'
                          ? `border-b-2 border-green-600 text-gray-600`
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
                        } rounded-md px-1 py-0.5`}
                      >
                        {countScheduled}
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="flex w-2/4 justify-end">
                <div className="pb-3">
                  <span className="pointer-events-none absolute translate-y-1/2 transform text-gray-300">
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    onChange={(event) => handleSearch(event)}
                    placeholder="Search"
                    className="w-full border-b-2 border-gray-300 px-3 py-2 pl-7 placeholder-gray-300 focus:border-green-700 focus:outline-none focus:ring-0 "
                  />
                </div>
              </div>
            </div>

            <div className="flex w-full min-w-0 flex-col break-words bg-white">
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
      </div>
    </>
  );
}
