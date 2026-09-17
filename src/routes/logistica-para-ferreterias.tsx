import { createFileRoute } from "@tanstack/react-router";
import { VerticalSeoPage, verticalHead } from "@/components/VerticalSeoPage";
import { ferreterias as config } from "@/content/verticals";

export const Route = createFileRoute("/logistica-para-ferreterias")({
  head: () => verticalHead(config),
  component: () => <VerticalSeoPage config={config} />,
});
