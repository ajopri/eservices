/* eslint-disable import/no-unresolved */
import Dashboard from '@components/Dashboard';
import Layout from '@components/Layout';

export default function Home({
  dataPayable,
  dataOpenPo,
  accountPayable,
  openInv,
}) {
  return (
    <Layout pageTitle="Dashboard">
      <Dashboard
        dataPayable={dataPayable}
        dataOpenPo={dataOpenPo}
        accountPayable={accountPayable}
        openInv={openInv}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const [payableRes, openPoRes, accountRes, openInvRes] = await Promise.all([
    fetch(
      'http://159.138.122.186:86/Api/DashboardDRM/GetPayableByAge?rcc=MCA&custgroup=NIPPON'
    ),
    fetch(
      'http://159.138.122.186:86/Api/DashboardDRM/GetOpenPO?rcc=MCA&custgroup=NIPPON'
    ),
    fetch(
      'http://159.138.122.186:86/Api/Invoices/GetOutstandingPayables?rcc=MCA&custgroup=NIPPON'
    ),
    fetch(
      'http://159.138.122.186:86/Api/DashboardDRM/GetOpenInvoices?rcc=MCA&custgroup=NIPPON'
    ),
  ]);

  const [dataPayable, dataOpenPo, accountPayable, openInv] = await Promise.all([
    payableRes.json(),
    openPoRes.json(),
    accountRes.json(),
    openInvRes.json(),
  ]);

  return {
    props: { dataPayable, dataOpenPo, accountPayable, openInv },
  };
}
