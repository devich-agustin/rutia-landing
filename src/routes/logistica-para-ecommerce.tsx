import { createFileRoute } from "@tanstack/react-router";
import { VerticalSeoPage, verticalHead } from "@/components/VerticalSeoPage";
import { ecommerce as config } from "@/content/verticals";

export const Route = createFileRoute("/logistica-para-ecommerce")({
  head: () => verticalHead(config),
  component: () => <VerticalSeoPage config={config} />,
});
