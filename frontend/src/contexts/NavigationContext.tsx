// React + Web3 Essentials
import React, { createContext, useState } from 'react'

export const NavigationContext = createContext({
  navigationSetup: null,
  setNavigationSetup: (value: any) => {}
});

const NavigationContextProvider = ({children}) => {
  const [navigationSetup, setNavigationSetup] = useState(null);
  
  return (
    <NavigationContext.Provider value={{ navigationSetup, setNavigationSetup }}>
      {children}
    </NavigationContext.Provider>
  )
}

export default NavigationContextProvider;