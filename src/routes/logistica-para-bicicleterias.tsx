import { createFileRoute } from "@tanstack/react-router";
import { VerticalSeoPage, verticalHead } from "@/components/VerticalSeoPage";
import { bicicleterias as config } from "@/content/verticals";

export const Route = createFileRoute("/logistica-para-bicicleterias")({
  head: () => verticalHead(config),
  component: () => <VerticalSeoPage config={config} />,
});
