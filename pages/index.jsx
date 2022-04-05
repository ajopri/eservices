/* eslint-disable import/no-unresolved */
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
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Tooltip } from '@nextui-org/react';
import Link from 'next/link';
import ReactCountryFlag from 'react-country-flag';
import Accountpayable from '@components/Dashboard/AccountPayable';
import Openorders from '@components/Dashboard/OpenOrders';

// Data link
const navLinks = [
  {
    id: 1,
    title: 'Dashboard',
    path: '/',
    icon: <FontAwesomeIcon icon={faChartBar} fixedWidth size="sm" />,
  },
  {
    id: 2,
    title: 'Order Management',
    path: '/order',
    icon: <FontAwesomeIcon icon={faShoppingCart} fixedWidth size="sm" />,
  },
  {
    id: 3,
    title: 'Invoices',
    path: '/invoices',
    icon: <FontAwesomeIcon icon={faDollarSign} fixedWidth size="sm" />,
  },
  {
    id: 4,
    title: 'Product Information',
    path: '/product',
    icon: <FontAwesomeIcon icon={faInfoCircle} fixedWidth size="sm" />,
  },
  {
    id: 5,
    title: 'Recommendations',
    path: '/recommendation',
    icon: <FontAwesomeIcon icon={faThumbsUp} fixedWidth size="sm" />,
  },
  {
    id: 6,
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

  return (
    <div className="font-poppins bg-maha-background min-h-screen">
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
        className={`hidden top-0 w-64 sm:w-20 shadow-lg text-gray-600 bg-white fixed inset-y-0 overflow-x-hidden overflow-y-hidden sm:block ${
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
            <li key={link.id}>
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
      <div className="pt-16 sm:pl-20">
        <div className="container px-8 py-7 flex flex-col">
          <div className="text-2xl font-semibold text-gray-600">Dashboard</div>
          <div className="flex">
            <div className="w-7/12 mr-2">
              <Openorders />
            </div>
            <div className="w-5/12 ml-2">
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
              <div className="flex flex-col space-y-4">
                <div className="flex space-x-4">
                  <div className="w-1/2 bg-white rounded-md shadow-xl h-auto py-4 px-6">
                    <div className="flex justify-start items-center">
                      <div className="mr-3">
                        <ReactCountryFlag
                          countryCode="SG"
                          svg
                          cdnUrl="https://hatscripts.github.io/circle-flags/flags/"
                          style={{
                            width: '1.5em',
                            height: '1.5em',
                          }}
                          title="SGD"
                        />
                      </div>
                      <div className="bg-gray-200 uppercase text-xs font-semibold text-gray-500 px-2 py-0.5 rounded-full">
                        SGD Account
                      </div>
                    </div>
                    <div className="font-bold text-2xl text-gray-800 w-full pt-1">
                      S$ 103,675.93
                    </div>
                  </div>
                  <div className="w-1/2 bg-white rounded-md shadow-xl h-auto py-4 px-6">
                    <div className="flex justify-start items-center">
                      <div className="mr-3">
                        <ReactCountryFlag
                          countryCode="US"
                          svg
                          cdnUrl="https://hatscripts.github.io/circle-flags/flags/"
                          style={{
                            width: '1.5em',
                            height: '1.5em',
                          }}
                          title="USD"
                        />
                      </div>
                      <div className="bg-gray-200 uppercase text-xs font-semibold text-gray-500 px-2 py-0.5 rounded-full">
                        usd Account
                      </div>
                    </div>
                    <div className="font-bold text-2xl text-gray-800 w-full pt-1">
                      US$ 295,414.61
                    </div>
                  </div>
                </div>
                <div className="container bg-white rounded-md shadow-xl h-auto p-4">
                  <Accountpayable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
