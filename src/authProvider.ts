import { AuthBindings } from "@refinedev/core";
import nookies from "nookies";

const AUTHENTICATION = "authentication"

export const authProvider: AuthBindings = {
  login: async () => {
    return {
      success: true,
      redirectTo: "/",
    };
  },
  logout: async () => {
    return {
      success: true,
      redirectTo: "/login",
    };
  },
  check: async (ctx: any) => {
    if (true) {
      return {
        authenticated: true,
      };
    }

    return {
      authenticated: false,
      logout: true,
      redirectTo: "/login",
    };
  },
  getPermissions: async (props: {workspaceId: string, options?: any}) => {
    return null;
  },
  getIdentity: async () => {
    return null;
  },
  onError: async (error) => {
    console.error("ON ERROR", error);
    return { error };
  },
};
