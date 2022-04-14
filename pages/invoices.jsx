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

export default function Invoices({ dataInvoices }) {
  const [item, setItem] = useState(dataInvoices.data);
  const [orderStat, setOrderStat] = useState('all');

  const [statOverdue, setStatOverdue] = useState(0);
  const [statPaid, setStatPaid] = useState(0);
  const [statOutstanding, setStatOutstanding] = useState(0);

  const filterItem = (stat) => {
    const newItem = dataInvoices.data.filter((newVal) =>
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
    result = dataInvoices.data.filter(
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
      <div className="flex flex-wrap sm:flex-nowrap sm:space-x-3 space-x-0">
        <div className="w-full sm:w-5/6 flex flex-col sm:flex-nowrap flex-wrap">
          <div className="flex flex-wrap sm:flex-nowrap space-x-3">
            {/* Profile */}
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

              {/* Profile Summary */}
              <Profileinvoice />
            </div>
            {/* Total outstanding */}
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
                              setItem(dataInvoices.data);
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
                              {dataInvoices.data.length}
                            </span>
                          </button>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                          <button
                            type="button"
                            className={`text-xs font-bold px-5 py-3 block leading-normal ${
                              orderStat === 'OverDue'
                                ? `text-gray-600 border-b-2 border-green-600`
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
                              } px-1 py-0.5 rounded-md`}
                            >
                              {statOverdue.length}
                            </span>
                          </button>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                          <button
                            type="button"
                            className={`text-xs font-bold px-5 py-3 block leading-normal ${
                              orderStat === 'Outstanding'
                                ? `text-gray-600 border-b-2 border-green-600`
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
                              } px-1 py-0.5 rounded-md`}
                            >
                              {statOutstanding.length}
                            </span>
                          </button>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                          <button
                            type="button"
                            className={`text-xs font-bold px-5 py-3 block leading-normal ${
                              orderStat === 'Paid'
                                ? `text-gray-600 border-b-2 border-green-600`
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
                              } px-1 py-0.5 rounded-md`}
                            >
                              {statPaid.length}
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
                  {/* Invoices */}
                  <div className="flex flex-col min-w-0 break-words bg-white w-full">
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
  try {
    const res = await fetch(
      'http://159.138.122.186:86/Api/Invoices/GetAllInvoices?rcc=MCA&custgroup=NIPPON'
    );
    const dataInvoices = await res.json();

    return {
      props: { dataInvoices },
    };
  } catch (error) {
    console.error('Error fetching invoice data', error);
    return { notFound: true };
  }
}
