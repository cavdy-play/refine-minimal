import { GetServerSideProps } from "next";
import Link from "next/link";
import { useList, HttpError, useOne } from "@refinedev/core";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { authProvider } from "src/authProvider";
import { Box } from "@mui/material";

type Workspace = {
  id: string,
  logo: string,
  name: string,
  description: string,
  status: string,
}

export default function Workspaces() {
  const { data, isLoading, isError } = useList<Workspace, HttpError>();
  const response = data?.data as unknown as { data: Workspace[] }

  return (
    <div>
      WORKSPACES
      <Link href="/workspaces/create">New Workspace</Link>
      {isLoading ? (<div>loading...</div>) : (
        <div>
          {Array.isArray(response?.data) && response.data.length > 0 ? response.data.map((workspace) => (
            <Box key={workspace.id}><Link href={`/workspace/${workspace.id}`}>{workspace.name}</Link></Box>
          )) : (<div>No workspaces</div>)}
        </div>
      )}
    </div>
  );
}

Workspaces.noLayout = true;

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const { authenticated, redirectTo } = await authProvider.check(context);

  const translateProps = await serverSideTranslations(context.locale ?? "en", [
    "common",
  ]);

  if (!authenticated) {
    return {
      props: { ...translateProps },
      redirect: {
        destination: `${redirectTo}?to=${encodeURIComponent("/workspaces")}`,
        permanent: false,
      },
    };
  }

  return { props: { ...translateProps } };
};