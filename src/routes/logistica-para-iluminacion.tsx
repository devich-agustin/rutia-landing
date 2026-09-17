import { createFileRoute } from "@tanstack/react-router";
import { VerticalSeoPage, verticalHead } from "@/components/VerticalSeoPage";
import { iluminacion as config } from "@/content/verticals";

export const Route = createFileRoute("/logistica-para-iluminacion")({
  head: () => verticalHead(config),
  component: () => <VerticalSeoPage config={config} />,
});
