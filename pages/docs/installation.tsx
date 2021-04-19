import React from "react";
import PageHead from "components/head";
import DocsLayout from "components/layouts/docs";
import { PageHeader } from "components/docs";
import Introduction from "components/docs/installation/introduction";
import Installation from "components/docs/installation/installation";
import { AdBox } from "analytics/ads";

const InstallationView = () => {
  return (
    <DocsLayout>
      <PageHead title="Installation" />
      <PageHeader>Installation</PageHeader>
      <AdBox id="installation" />
      <Installation />
    </DocsLayout>
  );
};

export default InstallationView;
