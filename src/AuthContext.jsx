import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [tokenState, setTokenState] = useState("");
  const [userState, setUserState] = useState("");

  return (
    <AuthContext.Provider
      value={{ tokenState, setTokenState, userState, setUserState }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
export default AuthProvider;
