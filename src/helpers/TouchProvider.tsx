import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface AppContextInterface {
  isTouchOpen: boolean;
  setIsTouchOpen: Dispatch<SetStateAction<boolean>>;
}

export const touchContextDefaultValue: AppContextInterface = {
  isTouchOpen: false,
  setIsTouchOpen: () => false
};

export const TouchContext = createContext<AppContextInterface>(touchContextDefaultValue);

export const TouchProvider = ({ children }: { children: ReactNode }) => {
  const [isTouchOpen, setIsTouchOpen] = useState<boolean>(false);
  const value = { isTouchOpen, setIsTouchOpen };

  return (
    <TouchContext.Provider value={value}>
      {children}
    </TouchContext.Provider>
  );
};
