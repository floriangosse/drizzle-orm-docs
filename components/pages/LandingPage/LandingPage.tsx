import React from 'react';

import styles from './LandingPage.module.css';

import Header from './LandingComponents/Header/Header';
import Performance from './LandingComponents/Performance/Performance';
import Advantages from './LandingComponents/Advantages/Advantages';

import Supporting from './LandingComponents/Supporting/Supporting';
import SupportingV2 from './LandingComponents/SupportingV2/SupportingV2';
import Runtimes from './LandingComponents/Supporting/Runtimes';
import Databases from './LandingComponents/Supporting/Databases';

const LandingPage = () => {
  const runtimes: string[] = ['Cloudflare Workers', 'Supabase functions', 'Vercel functions', 'Deno deploy', 'Bun', 'Lagon', 'ElectronJS', 'Browser'];
  const databases: string[] = ['Neon', 'PlanetScale', 'Turso', 'Supabase', 'PostgreSQL', 'MySQL', 'SQLite', 'Web SQLite'];
  return (
    <div className={styles.wrap}>
      <Header />
      <Advantages />
      <Supporting title="Deploy to the edge" description="We support every major runtime" items={runtimes} data={Runtimes} />
      <SupportingV2 title="Live on the edge" description="We support every major serverful and serveless runtime" items={runtimes} data={Runtimes} />
      <Supporting title="Connect to any database" description="We support all platform-specific, tcp, http and websocket based drivers" items={databases} data={Databases} />
      <Performance />
    </div>
  );
};

export default LandingPage;
