import React from 'react';
import Layout from '../components/Layout';
import '../styles/pages/main.sass';
import HeroScreen from '../components/Main/HeroScreen';
import MultiLevelMarketing from '../components/Main/MultiLevelMarketing';
import Items from '../components/Main/Items';
import Technology from '../components/Main/Technology';
import MainLast from '../components/Main/MainLast';

const IndexPage = () => (
  <Layout>
    <HeroScreen />
    <MultiLevelMarketing />
    <Items />
    <Technology />
    <MainLast />
  </Layout>
);

export default IndexPage;
