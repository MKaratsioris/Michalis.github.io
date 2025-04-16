import "./Portfolio.scss";
import { PageHeaderContent } from "../components/AllComponents";
import { useTitle } from "../hooks/useTitle";

import { FaDiagramProject } from "react-icons/fa6";

export const Portfolio = () => {
  useTitle("- Portfolio");
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        title="My Portfolio"
        icon={<FaDiagramProject size={40} />}
      />
    </section>
  );
};
