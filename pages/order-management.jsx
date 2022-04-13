/* eslint-disable import/no-unresolved */
import Layout from '@components/Layout';
import OrderByItem from '@components/OrderManagement/OrderByItem';
import OrderByPo from '@components/OrderManagement/OrderByPo';
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

export default function OrderManagement({ dataOrderByPo, dataOrderByItem }) {
  const [openTab, setOpenTab] = useState('item');
  const [searchVal, setsearchVal] = useState('');
  const [filteredListItem, setFilteredListItem] = useState(
    dataOrderByItem.data
  );
  const [filteredListPo, setFilteredListPo] = useState(dataOrderByPo.data);
  const handleSearch = (event, by) => {
    const value = event.target.value.toUpperCase();
    let result = [];
    if (by === 'item') {
      result = dataOrderByItem.data.filter(
        (data) =>
          data.itemName.search(value) !== -1 ||
          data.details.some((det) => det.poNumber.search(value) !== -1)
      );
      setFilteredListItem(result);
    } else {
      result = dataOrderByPo.data.filter(
        (data) =>
          data.poNumber.search(value) !== -1 ||
          data.details.some((det) => det.itemName.search(value) !== -1)
      );
      setFilteredListPo(result);
    }
  };

  return (
    <Layout pageTitle="Order Management">
      {/* Title */}
      <div className="py-3 font-semibold text-maha-purple flex items-center">
        All Orders{' '}
        <Tooltip content={tooltips} placement="right">
          <span className="text-gray-400 ml-2">
            <FontAwesomeIcon icon={faCircleInfo} />
          </span>
        </Tooltip>
      </div>
      {/* Order */}
      <div className="flex sm:flex-row flex-col space-x-0 sm:space-x-3 space-y-3 sm:space-y-0 min-h-[34rem]">
        <div className="basis-4/5 bg-white rounded-sm shadow border-[1px] border-gray-50 py-2 px-3">
          <div className="flex flex-wrap">
            <div className="w-full">
              {/* Filter */}
              <div className="flex items-center text-xs mb-2 space-x-1">
                {/* Tabs */}
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
                          setFilteredListItem(dataOrderByItem.data);
                          setsearchVal('');
                        }}
                        data-toggle="tab"
                        href="#byItem"
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
                          {filteredListItem.length}
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
                          setFilteredListPo(dataOrderByPo.data);
                          setsearchVal('');
                        }}
                        data-toggle="tab"
                        href="#byPo"
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
                          {filteredListPo.length}
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Search */}
                <div className="w-2/4 flex justify-end invisible sm:visible">
                  <div>
                    <span className="pointer-events-none absolute text-gray-300 transform translate-y-1/2">
                      <FontAwesomeIcon icon={faSearch} />
                    </span>
                    <input
                      type="text"
                      name="search"
                      id="search"
                      onChange={(event) => {
                        handleSearch(event, openTab);
                        setsearchVal(event.target.value);
                      }}
                      value={searchVal}
                      placeholder="Search"
                      className="w-full px-3 py-2 placeholder-gray-300 focus:border-green-700 border-b-2 border-gray-300 pl-7 focus:outline-none focus:ring-0 "
                    />
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full">
                <div className="flex-auto">
                  <div className="tab-content tab-space">
                    <div
                      className={openTab === 'item' ? 'block' : 'hidden'}
                      id="byItem"
                    >
                      <OrderByItem datas={filteredListItem} />
                    </div>
                    <div
                      className={openTab === 'po' ? 'block' : 'hidden'}
                      id="byPo"
                    >
                      <OrderByPo datas={filteredListPo} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Summary */}
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
                <div className="text-2xl font-bold">19</div>
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
                <div className="text-2xl font-bold">257</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export async function getServerSideProps() {
  // Fetch data from external API
  const resPo = await fetch(
    'http://159.138.122.186:86/Api/Orders/GetOrdersByPO?rcc=MCA&custgroup=NIPPON'
  );
  const dataOrderByPo = await resPo.json();

  const resItem = await fetch(
    'http://159.138.122.186:86/Api/Orders/GetOrdersByItem?rcc=MCA&custgroup=NIPPON'
  );
  const dataOrderByItem = await resItem.json();

  return { props: { dataOrderByPo, dataOrderByItem } };
}
