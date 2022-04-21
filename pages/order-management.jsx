/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
import Layout from '@components/Layout';
import OrderByItem from '@components/OrderManagement/OrderByItem';
import OrderByPo from '@components/OrderManagement/OrderByPo';
import Summary from '@components/OrderManagement/Summary';
import { faCircleInfo, faSearch } from '@fortawesome/free-solid-svg-icons';
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
    let result;
    const value = event.target.value.toUpperCase();
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
      <div className="flex items-center py-3 font-semibold text-maha-purple">
        All Orders{' '}
        <Tooltip content={tooltips} placement="right">
          <span className="ml-2 text-gray-400">
            <FontAwesomeIcon icon={faCircleInfo} />
          </span>
        </Tooltip>
      </div>
      {/* Order */}
      <div className="flex min-h-[34rem] flex-col space-x-0 space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
        <div className="basis-4/5 rounded-sm border-[1px] border-gray-50 bg-white py-2 px-3 shadow">
          <div className="flex flex-wrap">
            <div className="w-full">
              {/* Filter */}
              <div className="mb-2 flex items-center space-x-1 text-xs">
                {/* Tabs */}
                <div className="flex w-2/4 items-center justify-start font-semibold text-gray-600">
                  <ul className="mb-0 flex list-none flex-row" role="tablist">
                    <li className="-mb-px flex-auto text-center last:mr-0">
                      <a
                        className={`block space-x-2 px-3 py-3 text-xs font-bold leading-normal ${
                          openTab === 'item'
                            ? `border-b-2 border-green-600 text-gray-600`
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
                          } rounded-md px-1 py-0.5`}
                        >
                          {filteredListItem.length}
                        </span>
                      </a>
                    </li>
                    <li className="-mb-px flex-auto text-center last:mr-0">
                      <a
                        className={`block space-x-2 px-3 py-3 text-xs font-bold leading-normal ${
                          openTab === 'po'
                            ? `border-b-2 border-green-600 text-gray-600`
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
                          } rounded-md px-1 py-0.5`}
                        >
                          {filteredListPo.length}
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Search */}
                <div className="invisible flex w-2/4 justify-end sm:visible">
                  <div>
                    <span className="pointer-events-none absolute translate-y-1/2 transform text-gray-300">
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
                      className="w-full border-b-2 border-gray-300 px-3 py-2 pl-7 placeholder-gray-300 focus:border-green-700 focus:outline-none focus:ring-0 "
                    />
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="relative flex w-full min-w-0 flex-col break-words bg-white">
                <div className="flex-auto">
                  <div
                    className={openTab === 'item' ? '' : 'hidden'}
                    id="byItem"
                  >
                    <OrderByItem datas={filteredListItem} />
                  </div>
                  <div className={openTab === 'po' ? '' : 'hidden'} id="byPo">
                    <OrderByPo datas={filteredListPo} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Summary */}
        <Summary sum={dataOrderByPo.data[0]} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const [poRes, itemRes] = await Promise.all([
    fetch(
      'http://159.138.122.186:86/Api/Orders/GetOrdersByPO?rcc=MCA&custgroup=NIPPON'
    ),
    fetch(
      'http://159.138.122.186:86/Api/Orders/GetOrdersByItem?rcc=MCA&custgroup=NIPPON'
    ),
  ]);

  const [dataOrderByPo, dataOrderByItem] = await Promise.all([
    poRes.json(),
    itemRes.json(),
  ]);

  return {
    props: { dataOrderByPo, dataOrderByItem },
  };
}
