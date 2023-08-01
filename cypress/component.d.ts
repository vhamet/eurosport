import { MountOptions, MountReturn } from 'cypress/react';
import { EnhancedStore } from '@reduxjs/toolkit';
import { MemoryRouterProps } from 'react-router-dom';

import { RootState } from '../src/redux/store';

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Mounts a React node
       * @param component React Node to mount
       * @param options Additional options to pass into mount
       */
      mount(
        component: React.ReactNode,
        options?: MountOptions & { reduxStore?: EnhancedStore<RootState> } & {
          routerProps?: MemoryRouterProps;
        }
      ): Cypress.Chainable<MountReturn>;
    }
  }
}
