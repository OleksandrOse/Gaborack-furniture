import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface AppContextInterface {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const menuContextDefaultValue: AppContextInterface = {
  isMenuOpen: false,
  setIsMenuOpen: () => false
};

export const MenuContext = createContext<AppContextInterface>(menuContextDefaultValue);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const value = { isMenuOpen, setIsMenuOpen };

  return (
    <MenuContext.Provider value={value}>
      {children}
    </MenuContext.Provider>
  );
};

