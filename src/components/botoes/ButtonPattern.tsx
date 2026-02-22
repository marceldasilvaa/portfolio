import { Link } from "react-router-dom";

const Button = ({ text, page }: { text: string; page: string }) => {
  return (
    <>
      <div className="flex items-center text-center">
        <Link
          to={page}
          className="w-50 font-semibold bg-blue-600 p-2 rounded-2xl hover:bg-blue-400"
        >
          {text}
        </Link>
      </div>
    </>
  );
};

export default Button;
