import { faOutdent } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Menus from './Menus';
// Data link

export default function Sidebar() {
  // sidebar open and close state
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  // router
  const router = useRouter();
  return (
    <>
      {/* sidebar close button */}
      <button
        type="button"
        className={`p-4 text-gray-500 transition hover:text-maha-purple fixed z-50 ${
          sidebar
            ? 'left-[17rem] bg-white rounded-full shadow-lg'
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
      <aside
        className={`hidden z-10 top-0 w-64 sm:w-20 shadow-lg text-gray-600 bg-white fixed inset-y-0 overflow-x-hidden overflow-y-hidden sm:block ${
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
          {Menus.map((link) => (
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
    </>
  );
}
