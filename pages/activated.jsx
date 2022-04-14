/* eslint-disable import/no-unresolved */
import LayoutAuth from '@components/Layout/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Activated() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 2000);
  }, []);
  return (
    <LayoutAuth pageTitle="Request Submitted">
      {/* content */}
      <div className="w-[26rem]">
        {/* title */}
        <div className="text-left mb-8">
          <h1 className="text-3xl font-bold text-gray-700">Welcome, Lily!</h1>
          <p className="text-sm text-gray-500 mt-2">
            Thank you for activating your account. You may now login anytime to
            get exclusive information and updates on orders.
          </p>
        </div>
        <div className="w-80">
          <div className="mb-6">
            <Link href="/" passHref>
              <button
                type="button"
                className="w-full px-3 py-3 text-white bg-maha-purple rounded-full hover:opacity-70 focus:outline-none duration-100 ease-in-out uppercase"
              >
                continue
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* end content */}
    </LayoutAuth>
  );
}
