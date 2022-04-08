/* eslint-disable import/no-unresolved */
import Layout from '@components/Layout';
import OrderByItem from '@components/OrderManagement/OrderByItem';
import {
  faBoxes,
  faBoxOpen,
  faCalendarCheck,
  faCalendarWeek,
  faCircleInfo,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from '@nextui-org/react';
import { useState } from 'react';

const tooltips = (
  <span>
    All current and historical POs are displayed.
    <br /> You may search them by item or PO no.
  </span>
);

export default function OrderManagement() {
  const [openTab, setOpenTab] = useState('item');
  return (
    <Layout pageTitle="Order Management">
      <div className="py-3 font-semibold text-maha-purple flex items-center">
        All Orders{' '}
        <Tooltip content={tooltips} placement="right">
          <span className="text-gray-400 ml-2">
            <FontAwesomeIcon icon={faCircleInfo} />
          </span>
        </Tooltip>
      </div>
      <div className="flex sm:flex-row flex-col space-x-0 sm:space-x-3 space-y-3 sm:space-y-0">
        <div className="basis-4/5 bg-white rounded-sm shadow border-[1px] border-gray-50 py-2 px-3">
          <div className="flex flex-wrap">
            <div className="w-full">
              <div className="flex items-center text-xs mb-2 space-x-1">
                <div className="w-2/4 flex items-center justify-start font-semibold text-gray-600">
                  <ul className="flex mb-0 list-none flex-row" role="tablist">
                    <li className="-mb-px last:mr-0 flex-auto text-center">
                      <a
                        className={`text-xs font-bold px-3 py-3 block leading-normal space-x-2 ${
                          openTab === 'item'
                            ? `text-gray-600 border-b-2 border-green-600`
                            : `text-gray-400`
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenTab('item');
                        }}
                        data-toggle="tab"
                        href="#link1"
                        role="tablist"
                      >
                        <span className="whitespace-nowrap">By Item</span>
                        <span
                          className={`${
                            openTab === 'item'
                              ? 'bg-green-50 text-green-600'
                              : 'bg-gray-100'
                          } px-1 py-0.5 rounded-md`}
                        >
                          21
                        </span>
                      </a>
                    </li>
                    <li className="-mb-px last:mr-0 flex-auto text-center">
                      <a
                        className={`text-xs font-bold px-3 py-3 block leading-normal space-x-2 ${
                          openTab === 'po'
                            ? `text-gray-600 border-b-2 border-green-600`
                            : `text-gray-400`
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenTab('po');
                        }}
                        data-toggle="tab"
                        href="#link2"
                        role="tablist"
                      >
                        <span className="whitespace-nowrap">By PO</span>
                        <span
                          className={`${
                            openTab === 'po'
                              ? 'bg-green-50 text-green-600'
                              : 'bg-gray-100'
                          } px-1 py-0.5 rounded-md`}
                        >
                          65
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-2/4 flex justify-end">
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
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 ">
                <div className="flex-auto">
                  <div className="tab-content tab-space">
                    <div
                      className={openTab === 'item' ? 'block' : 'hidden'}
                      id="link1"
                    >
                      <OrderByItem />
                    </div>
                    <div
                      className={openTab === 'po' ? 'block' : 'hidden'}
                      id="link2"
                    >
                      test
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/5 bg-white rounded-sm shadow border-[1px] border-gray-50 py-2 px-3">
          <div className="flex flex-col sm:h-full h-96">
            <div className="basis-1/4 flex flex-1 items-center h-1/4 mx-4 border-b-[1px] border-gray-200 space-x-7">
              <span className="bg-red-100 text-red-600 px-3.5 py-3 rounded-full">
                <FontAwesomeIcon icon={faBoxOpen} fixedWidth />
              </span>
              <div>
                <div className="text-xs font-light text-gray-500">
                  Unfulfilled
                </div>
                <div className="text-2xl font-bold">32</div>
              </div>
            </div>
            <div className="basis-1/4 flex flex-1 items-center h-1/4 mx-4 border-b-[1px] border-gray-200 space-x-7">
              <span className="bg-maha-purple bg-opacity-10 text-maha-purple px-3.5 py-3 rounded-full">
                <FontAwesomeIcon icon={faCalendarWeek} fixedWidth />
              </span>
              <div>
                <div className="text-xs font-light text-gray-500">
                  Scheduled
                </div>
                <div className="text-2xl font-bold">4</div>
              </div>
            </div>
            <div className="basis-1/4 flex flex-1 items-center h-1/4 mx-4 border-b-[1px] border-gray-200 space-x-7">
              <span className="bg-orange-100 text-orange-600 px-3.5 py-3 rounded-full">
                <FontAwesomeIcon icon={faBoxes} fixedWidth />
              </span>
              <div>
                <div className="text-xs font-light text-gray-500">
                  Partially Fulfilled
                </div>
                <div className="text-2xl font-bold">32</div>
              </div>
            </div>
            <div className="basis-1/4 flex flex-1 items-center h-1/4 mx-4 space-x-7">
              <span className="bg-green-100 text-green-600 px-3.5 py-3 rounded-full">
                <FontAwesomeIcon icon={faCalendarCheck} fixedWidth />
              </span>
              <div>
                <div className="text-xs font-light text-gray-500">
                  Fulfilled
                </div>
                <div className="text-2xl font-bold">32</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
