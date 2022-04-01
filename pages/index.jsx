/* eslint-disable react/button-has-type */
import { faBell } from '@fortawesome/free-regular-svg-icons';
import {
  faChartBar,
  faDollarSign,
  faFileInvoiceDollar,
  faInfoCircle,
  faOutdent,
  faShoppingCart,
  faThumbsUp,
  faMagnifyingGlass,
  faUser,
  faCircleInfo,
  faChevronDown,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Tooltip } from '@nextui-org/react';
import Link from 'next/link';

// Data link
const navLinks = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <FontAwesomeIcon icon={faChartBar} fixedWidth size="sm" />,
  },
  {
    title: 'Order Management',
    path: '/order',
    icon: <FontAwesomeIcon icon={faShoppingCart} fixedWidth size="sm" />,
  },
  {
    title: 'Invoices',
    path: '/invoices',
    icon: <FontAwesomeIcon icon={faDollarSign} fixedWidth size="sm" />,
  },
  {
    title: 'Product Information',
    path: '/product',
    icon: <FontAwesomeIcon icon={faInfoCircle} fixedWidth size="sm" />,
  },
  {
    title: 'Recommendations',
    path: '/recommendation',
    icon: <FontAwesomeIcon icon={faThumbsUp} fixedWidth size="sm" />,
  },
  {
    title: 'Quotations',
    path: '/quotation',
    icon: <FontAwesomeIcon icon={faFileInvoiceDollar} fixedWidth size="sm" />,
  },
];

export default function Home() {
  const today = new Date();
  const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // sidebar open and close state
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  // router
  const router = useRouter();

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
    <div className="font-poppins bg-maha-background">
      {/* Navbar */}
      {/* sidebar close button */}
      <button
        type="button"
        className={`p-4 text-gray-500 transition hover:text-maha-purple fixed z-10 ${
          sidebar
            ? 'fixed left-[17rem] bg-white rounded-full shadow-lg'
            : 'duration-500 w-20 left-0 sm:left-16 h-16'
        }`}
        onClick={handleSidebar}
      >
        <FontAwesomeIcon
          icon={faOutdent}
          fixedWidth
          size="lg"
          transform={sidebar ? { rotate: 0 } : { rotate: 180 }}
        />
      </button>
      <nav className="fixed top-0 inset-x-0 h-16 pl-8 sm:pl-20 text-gray-600 text-xs bg-white font-medium flex justify-end sm:justify-between items-center shadow-md">
        {/* Search */}
        <div className="px-4 flex items-center justify-between pl-0 sm:visible invisible sm:pl-20">
          <span className="absolute text-gray-400">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
          </span>
          <input
            placeholder="Search anything"
            className="w-full px-3 py-2 pl-5 placeholder-gray-400 focus:outline-none"
          />
        </div>

        <div className="flex items-center">
          {/* Date */}
          <div className="px-4 hidden sm:block">{formatDate(today)}</div>

          {/* Notification */}
          <div className="px-4">
            <FontAwesomeIcon icon={faBell} />
          </div>

          {/* navbar user */}
          <div className="pr-4 flex items-center space-x-4">
            <span className="rounded-full bg-gray-100 px-3 py-2">
              <FontAwesomeIcon icon={faUser} />
            </span>{' '}
            <span className="hidden sm:block">Achmad Joko Priyono</span>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        className={`hidden top-0 w-64 sm:w-20 shadow-lg text-gray-600 bg-white fixed inset-y-0 overflow-x-hidden overflow-y-hidden sm:block min-h-screen ${
          sidebar ? 'w-20 sm:w-64 sm:block' : 'duration-500 w-20'
        }`}
      >
        <div className="flex justify-center shadow mx-auto px-5 py-2.5 h-16">
          <Image
            src={
              sidebar ? '/images/maha-logo.png' : '/images/maha-logo-small.png'
            }
            width={sidebar ? 160 : 40}
            height={sidebar ? 33 : 40}
            alt="Logo"
          />
        </div>

        {/* sidebar menu */}
        <ul className="mt-4 text-gray-500">
          {navLinks.map((link) => (
            <li>
              <Link href={link.path} passHref>
                <span
                  className={`font-medium space-x-2 inline-flex px-4 transition w-full hover:text-maha-purple hover:bg-gray-100 hover:border-r-2 hover:border-maha-purple ${
                    router.pathname === link.path
                      ? 'text-maha-purple border-maha-purple border-r-4'
                      : ''
                  } ${
                    sidebar ? 'items-center py-2' : 'py-4 mb-4 justify-center'
                  }`}
                >
                  <Tooltip
                    content={sidebar ? '' : link.title}
                    rounded
                    contentColor="secondary"
                    placement="right"
                    hideArrow
                    offset={40}
                  >
                    {link.icon}
                  </Tooltip>{' '}
                  <span className={`${sidebar ? '' : 'hidden'} py-1.5`}>
                    {link.title}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Content */}
      <main className="pt-16 sm:pl-20 h-screen">
        <div className="container px-8 py-7 min-h-screen flex flex-col">
          <div className="text-2xl font-semibold text-gray-600">Dashboard</div>
          <div className="flex">
            <div className="w-7/12 mr-2">
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
                                onClick={() =>
                                  console.log('View user', order.id)
                                }
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
                          <td className="px-3 py-2">
                            {renderCell(order.status)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="w-5/12 py-4 font-semibold text-maha-purple">
              Total Outstanding Payables{' '}
              <span className="text-gray-400">
                <FontAwesomeIcon icon={faCircleInfo} />
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
