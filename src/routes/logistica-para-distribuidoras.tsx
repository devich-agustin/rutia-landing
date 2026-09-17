import { createFileRoute } from "@tanstack/react-router";
import { VerticalSeoPage, verticalHead } from "@/components/VerticalSeoPage";
import { distribuidoras as config } from "@/content/verticals";

export const Route = createFileRoute("/logistica-para-distribuidoras")({
  head: () => verticalHead(config),
  component: () => <VerticalSeoPage config={config} />,
});
