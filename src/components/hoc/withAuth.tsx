import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { APP_ROUTES, AUTH_STATE } from "../../services/enums";

interface WithAuthProps {
  children: React.ReactNode;
}

const WithAuth = ({ children }: WithAuthProps) => {
  const { status, data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === AUTH_STATE.UNAUTHENTICATED && !session) {
      router.push(APP_ROUTES.LOGIN);
    }
  }, [status]);
  return <>{children}</>;
};

export default WithAuth;
