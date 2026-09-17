import { createFileRoute } from "@tanstack/react-router";
import { VerticalSeoPage, verticalHead } from "@/components/VerticalSeoPage";
import { casasMateriales as config } from "@/content/verticals";

export const Route = createFileRoute("/logistica-para-casas-de-materiales")({
  head: () => verticalHead(config),
  component: () => <VerticalSeoPage config={config} />,
});
