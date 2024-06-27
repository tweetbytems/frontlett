import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

interface OuterLinkProps {
  outerLinkText: string; // Renamed prop to avoid conflict
}

const OuterLink: React.FC<OuterLinkProps> = ({ outerLinkText }) => {
  return (
    <div className="flex justify-center gap-3 pt-10 font-semibold text-sm  ">
      <Link className="underline hover:text-gray-500" to="/">
        {outerLinkText}
      </Link>
      <span>
        <FaArrowRight />
      </span>
    </div>
  );
};

export default OuterLink;
