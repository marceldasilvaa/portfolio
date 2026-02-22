import { Link } from "react-router-dom";

const ButtonClean = ({ text, page }: { text: string; page: string }) => {
  return (
    <>
      <div className="flex items-center text-center">
        <Link
          to={page}
          className="w-50 font-semibold p-2 rounded-2xl hover:bg-neutral-700"
        >
          {text}
        </Link>
      </div>
    </>
  );
};

export default ButtonClean;
