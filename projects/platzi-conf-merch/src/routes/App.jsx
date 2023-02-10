import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

import { Checkout } from '../containers/Checkout'
import { Home } from '../containers/Home'
import { Information } from '../containers/Information'
import { NotFound } from '../containers/NotFound'
import { Payment } from '../containers/Payment'
import { Success } from '../containers/Success'
import { Layout } from '../components/Layout'
import { AppContext } from '../context/AppContext'
import { useInitialState } from '../hooks/useInitialState'

const options = {
  'client-id': import.meta.env.VITE_PAYPAL_CLIENT_ID,
  currency: 'USD',
  intent: 'capture'
}

export const App = () => {
  const initialState = useInitialState()

  return (
    <PayPalScriptProvider options={options}>
      <AppContext.Provider value={initialState}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route exact path='/' element={<Home />} />
              <Route exact path='/checkout' element={<Checkout />} />
              <Route exact path='/checkout/information' element={<Information />} />
              <Route exact path='/checkout/payment' element={<Payment />} />
              <Route exact path='/checkout/success' element={<Success />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </PayPalScriptProvider>
  )
}
