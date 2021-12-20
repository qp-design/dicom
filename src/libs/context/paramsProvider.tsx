import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
} from "react";

type paramsType = Array<string>

const ParamsContext = createContext<{
  picture: paramsType | [];
  setPicture: Dispatch<paramsType | []>;
} | null>(null);

ParamsContext.displayName = "pictureContext";

const PictureContextProvider = ({ children }: { children: ReactNode }) => {
  const [picture, setPicture] = useState<paramsType | []>([]);

  return (
    <ParamsContext.Provider
      value={{
        picture,
        setPicture,
      }}
    >
      {children}
    </ParamsContext.Provider>
  );
};

export default PictureContextProvider;

export const usePictureContext = () => {
  const context = useContext(ParamsContext);
  if (!context) {
    throw new Error("useParamsContext调用必须在ParamsContextProvider里面");
  }
  return context;
};
