import {
  faBell,
  faMagnifyingGlass,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar() {
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
  return (
    <nav className="fixed z-10 top-0 inset-x-0 h-16 pl-8 sm:pl-20 text-gray-600 text-xs bg-white font-medium flex justify-end sm:justify-between items-center shadow-md">
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
  );
}
