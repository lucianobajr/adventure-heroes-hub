import React, { createContext, useCallback, useContext, useState } from "react";

type User = {
  nickname: string;
};

interface AuthState {
  user: User;
}

interface SignInCredentials {
  nickname: string;
}

type AuthContextType = {
  user: AuthState;
  signIn: (credentials: SignInCredentials) => void;
  signOut: () => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

type Props = {
  children?: React.ReactNode;
};

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<AuthState>(() => {
    const user = localStorage.getItem("@AdventureHeroesHub:user");

    if (user) {
      return {
        user: JSON.parse(user),
      };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(({ nickname }: SignInCredentials) => {
    localStorage.setItem("@AdventureHeroesHub:user", JSON.stringify(nickname));


    setUser({ user: { nickname } });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@AdventureHeroesHub:user");

    setUser({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextType {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };