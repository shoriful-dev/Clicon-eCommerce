import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// Create a client
const queryClient = new QueryClient();
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
