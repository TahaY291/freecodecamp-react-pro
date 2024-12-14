import React, { useState, useContext, createContext } from 'react';
import sublinks from './data';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Move useState hooks here
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({})
  const [page , setPage] = useState({page: '',links: [] })

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((item)=> item.page === text)
    setPage(page)
    setLocation(coordinates)
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider value={{ isSubmenuOpen, isSidebarOpen, openSubmenu, openSidebar, closeSubmenu, closeSidebar, location, page }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
