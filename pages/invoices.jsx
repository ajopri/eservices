/* eslint-disable prefer-const */
/* eslint-disable import/no-unresolved */
import { faCircleInfo, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from '@nextui-org/react';
import Account from '@components/Dashboard/TotalOutstanding/AccountPayable/Account';
import Layout from '@components/Layout';
import { useEffect, useState } from 'react';
import Statement from '@components/Invoices/Statement';
import Profileinvoice from '@components/Invoices/ProfileInvoice';
import Listinvoices from '@components/Invoices/ListInvoices';

export default function Invoices({ accountPayable, dataInv }) {
  const [item, setItem] = useState(dataInv.data);
  const [orderStat, setOrderStat] = useState('all');

  const [statOverdue, setStatOverdue] = useState(0);
  const [statPaid, setStatPaid] = useState(0);
  const [statOutstanding, setStatOutstanding] = useState(0);

  const filterItem = (stat) => {
    const newItem = dataInv.data.filter((newVal) =>
      newVal.invStatus.includes(stat)
    );
    setItem(newItem);
    return newItem;
  };

  useEffect(() => setStatOverdue(() => filterItem('OverDue')), []);
  useEffect(() => setStatPaid(() => filterItem('Paid')), []);
  useEffect(() => setStatOutstanding(() => filterItem('Outstanding')), []);

  const handleSearch = (event) => {
    let result;
    const { value } = event.target;
    result = dataInv.data.filter(
      (data) => data.invNumber === parseInt(value, 10)
    );

    setItem(result);
  };

  const profile = (
    <span>
      Summary of your credit terms, total overdue and
      <br />
      outstanding invoices
    </span>
  );

  return (
    <Layout pageTitle="Invoices">
      <div className="flex flex-wrap space-x-0 sm:flex-nowrap sm:space-x-3">
        <div className="flex w-full flex-col flex-wrap sm:w-5/6 sm:flex-nowrap">
          <div className="flex flex-wrap space-x-3 sm:flex-nowrap">
            {/* Profile */}
            <div className="w-full sm:w-3/5">
              {/* Title */}
              <div className="flex items-center py-3 font-semibold text-maha-purple">
                Profile{' '}
                <Tooltip content={profile} placement="right">
                  <span className="ml-2 text-gray-400">
                    <FontAwesomeIcon icon={faCircleInfo} />
                  </span>
                </Tooltip>
              </div>

              {/* Profile Summary */}
              <Profileinvoice />
            </div>
            {/* Total outstanding */}
            <div className="w-full sm:w-2/5">
              {/* Title */}
              <div className="flex items-center py-3 font-semibold text-maha-purple">
                Total Outstanding Payables{' '}
                <Tooltip
                  content="Only outstanding & overdue invoices are displayed."
                  placement="top"
                >
                  <span className="ml-2 text-gray-400">
                    <FontAwesomeIcon icon={faCircleInfo} />
                  </span>
                </Tooltip>
              </div>

              {/* Account */}
              <Account accountPayable={accountPayable} />
            </div>
          </div>
          <div className="mt-3 flex w-full">
            <div className="container rounded-md border-[1px] border-gray-200 bg-white p-4 shadow-sm">
              <div className="flex flex-wrap">
                <div className="w-full">
                  {/* Filter */}
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
                              setItem(dataInv.data);
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
                              {dataInv.data.length}
                            </span>
                          </button>
                        </li>
                        <li className="-mb-px mr-2 flex-auto text-center last:mr-0">
                          <button
                            type="button"
                            className={`block px-5 py-3 text-xs font-bold leading-normal ${
                              orderStat === 'OverDue'
                                ? `border-b-2 border-green-600 text-gray-600`
                                : `text-gray-400`
                            }`}
                            onClick={() => {
                              filterItem('OverDue');
                              setOrderStat('OverDue');
                            }}
                          >
                            <span>OverDue</span>{' '}
                            <span
                              className={`${
                                orderStat === 'OverDue'
                                  ? 'bg-green-50 text-green-600'
                                  : 'bg-gray-100'
                              } rounded-md px-1 py-0.5`}
                            >
                              {statOverdue.length}
                            </span>
                          </button>
                        </li>
                        <li className="-mb-px mr-2 flex-auto text-center last:mr-0">
                          <button
                            type="button"
                            className={`block px-5 py-3 text-xs font-bold leading-normal ${
                              orderStat === 'Outstanding'
                                ? `border-b-2 border-green-600 text-gray-600`
                                : `text-gray-400`
                            }`}
                            onClick={() => {
                              filterItem('Outstanding');
                              setOrderStat('Outstanding');
                            }}
                          >
                            <span>Outstanding</span>{' '}
                            <span
                              className={`${
                                orderStat === 'Outstanding'
                                  ? 'bg-green-50 text-green-600'
                                  : 'bg-gray-100'
                              } rounded-md px-1 py-0.5`}
                            >
                              {statOutstanding.length}
                            </span>
                          </button>
                        </li>
                        <li className="-mb-px mr-2 flex-auto text-center last:mr-0">
                          <button
                            type="button"
                            className={`block px-5 py-3 text-xs font-bold leading-normal ${
                              orderStat === 'Paid'
                                ? `border-b-2 border-green-600 text-gray-600`
                                : `text-gray-400`
                            }`}
                            onClick={() => {
                              filterItem('Paid');
                              setOrderStat('Paid');
                            }}
                          >
                            <span>Paid</span>{' '}
                            <span
                              className={`${
                                orderStat === 'Paid'
                                  ? 'bg-green-50 text-green-600'
                                  : 'bg-gray-100'
                              } rounded-md px-1 py-0.5`}
                            >
                              {statPaid.length}
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
                  {/* Invoices */}
                  <div className="flex w-full min-w-0 flex-col break-words bg-white">
                    <div className="flex-auto">
                      <div className="tab-content tab-space">
                        <div>
                          <Listinvoices datas={item} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Statement */}
        <Statement />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const [accountRes, invRes] = await Promise.all([
    fetch(
      'http://159.138.122.186:86/Api/Invoices/GetOutstandingPayables?rcc=MCA&custgroup=NIPPON'
    ),
    fetch(
      'http://159.138.122.186:86/Api/Invoices/GetAllInvoices?rcc=MCA&custgroup=NIPPON'
    ),
  ]);

  const [accountPayable, dataInv] = await Promise.all([
    accountRes.json(),
    invRes.json(),
  ]);

  return {
    props: { accountPayable, dataInv },
  };
}
