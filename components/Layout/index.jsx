import Head from 'next/head';
import Navbar from './Main/Navbar';
import Sidebar from './Main/Sidebar';

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>E-Services | {pageTitle}</title>
        <meta name="description" content="E-Services Maha Chemicals" />
      </Head>
      <div className="font-poppins bg-maha-background min-h-screen w-full">
        {/* Navbar */}
        <Navbar />

        {/* Sidebar */}
        <Sidebar />

        {/* Content */}
        <div className="pt-16 sm:pl-20">{children}</div>
      </div>
    </>
  );
}
