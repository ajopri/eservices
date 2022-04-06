import {
  faChartBar,
  faDollarSign,
  faFileInvoiceDollar,
  faInfoCircle,
  faShoppingCart,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menus = [
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

export default Menus;
