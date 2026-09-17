import { createFileRoute } from "@tanstack/react-router";
import { VerticalSeoPage, verticalHead } from "@/components/VerticalSeoPage";
import { electrodomesticos as config } from "@/content/verticals";

export const Route = createFileRoute("/logistica-para-electrodomesticos")({
  head: () => verticalHead(config),
  component: () => <VerticalSeoPage config={config} />,
});
