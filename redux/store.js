import { configureStore } from '@reduxjs/toolkit';
import Ticket from './Ticket';
export const store = configureStore({
    reducer: {
        ticket: Ticket
    }
  });