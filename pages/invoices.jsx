/* eslint-disable import/no-unresolved */
import {
  faCircleInfo,
  faExclamationTriangle,
  faMoneyCheckAlt,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from '@nextui-org/react';
import Account from '@components/Dashboard/TotalOutstanding/AccountPayable/Account';
import Layout from '@components/Layout';
import { useState } from 'react';
import Orders from '@components/Dashboard/OpenOrders/Orders';
import Datas from '../components/Dashboard/OpenOrders/Data';

export default function Invoices() {
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
  const profile = (
    <span>
      Summary of your credit terms, total overdue and
      <br />
      outstanding invoices
    </span>
  );
  const statement = (
    <div>
      Overall statement of accounts for orders transacted
      <br />
      in both local and US currency.
    </div>
  );
  return (
    <Layout pageTitle="Invoices">
      <div className="flex flex-wrap sm:flex-nowrap sm:space-x-3 space-x-0">
        <div className="w-full sm:w-5/6 flex flex-col sm:flex-nowrap flex-wrap">
          <div className="flex flex-wrap sm:flex-nowrap space-x-3">
            <div className="w-full sm:w-3/5">
              {/* Title */}
              <div className="py-3 font-semibold text-maha-purple flex items-center">
                Profile{' '}
                <Tooltip content={profile} placement="right">
                  <span className="text-gray-400 ml-2">
                    <FontAwesomeIcon icon={faCircleInfo} />
                  </span>
                </Tooltip>
              </div>

              {/* Summary */}
              <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-3 gap-0 space-y-3 sm:space-y-0 min-h-[5.5rem]">
                <div className="flex items-center bg-white rounded-md border-[1px] border-gray-200 px-5 py-3">
                  <div className="flex w-full space-x-4 justify-center">
                    <span className="bg-maha-purple bg-opacity-10 text-maha-purple px-3 py-3 rounded-full">
                      <FontAwesomeIcon
                        icon={faMoneyCheckAlt}
                        size="lg"
                        fixedWidth
                      />
                    </span>
                    <div>
                      <div className="text-xs font-light text-gray-500">
                        Credit Terms
                      </div>
                      <div className="text-2xl font-bold">90 days</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center bg-white rounded-md border-[1px] border-gray-200 px-5 py-3 col-span-2">
                  {/* Overdue */}
                  <div className="flex w-full justify-center space-x-4 border-r-[1px] border-gray-300">
                    <span className="bg-red-100 text-red-600 px-3 py-3 rounded-full">
                      <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        size="lg"
                        fixedWidth
                      />
                    </span>
                    <div>
                      <div className="text-xs font-light text-gray-500">
                        Overdue
                      </div>
                      <div className="text-2xl font-bold">32</div>
                    </div>
                  </div>
                  {/* Outstanding */}
                  <div className="flex w-full justify-center space-x-4 border-l-[1px] border-gray-300">
                    <span className="bg-orange-100 text-orange-600 px-3 py-3 rounded-full">
                      <FontAwesomeIcon
                        icon={faMoneyCheckAlt}
                        size="lg"
                        fixedWidth
                      />
                    </span>
                    <div>
                      <div className="text-xs font-light text-gray-500">
                        Outstanding
                      </div>
                      <div className="text-2xl font-bold">4</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-2/5">
              {/* Title */}
              <div className="py-3 font-semibold text-maha-purple flex items-center">
                Total Outstanding Payables{' '}
                <Tooltip
                  content="Only outstanding & overdue invoices are displayed."
                  placement="top"
                >
                  <span className="text-gray-400 ml-2">
                    <FontAwesomeIcon icon={faCircleInfo} />
                  </span>
                </Tooltip>
              </div>

              {/* Account */}
              <Account />
            </div>
          </div>
          <div className="flex w-full mt-3">
            <div className="container bg-white rounded-md shadow-sm p-4 border-[1px] border-gray-200">
              <div className="flex flex-wrap">
                <div className="w-full">
                  {/* Filter */}
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
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/6">
          {/* Title */}
          <div className="py-3 font-semibold text-maha-purple flex items-center">
            Statement of Accounts{' '}
            <Tooltip content={statement} placement="bottom" keepMounted>
              <span className="text-gray-400 ml-2">
                <FontAwesomeIcon icon={faCircleInfo} />
              </span>
            </Tooltip>
          </div>
          <div className="bg-white border-[1px] border-gray-200 py-4 px-4">
            <div className="flex">
              <div className="bg-gray-200 text-center uppercase text-xs font-semibold text-gray-500 px-2 py-0.5 rounded-full w-full">
                MONTHLY SOA DOCUMENTS
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
