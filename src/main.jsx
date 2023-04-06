import '@/styles/normalize.css';
import '@/styles/reset.css';
import '@/styles/global.css';
import '@/styles/theme.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { RecoilRoot, RecoilEnv } from 'recoil';
import { RecoilLogger } from 'recoil-devtools-logger';

// import { HelmetProvider } from 'react-helmet-async';
// import { TimeTravelObserver } from './@recoilDebug';
import App from '@/app/App';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

const container = document.getElementById('root');

createRoot(container).render(
  // <StrictMode>
    <RecoilRoot>
      <App />
      <RecoilLogger />
      {/* <TimeTravelObserver /> */}
    </RecoilRoot>
  // </StrictMode>
);
