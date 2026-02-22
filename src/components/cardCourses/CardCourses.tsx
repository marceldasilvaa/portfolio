type textInCards = {
  course: string;
  platform: string;
  hour: string;
  year: string;
};

const CardCourses = ({ course, platform, hour, year }: textInCards) => {
  return (
    <>
      <div className="max-w-xs p-4 md:p-6 flex flex-col bg-neutral-800 rounded-xl border border-neutral-700">
        <p className="text-sm md:text-base">
          <span className="text-base">
            <strong>Curso: </strong>
          </span>
          {course}
        </p>
        <p className="text-blue-400 text-sm">
          {platform} <span className="text-white">•</span> {hour}{" "}
          <span className="text-white">•</span> {year}
        </p>
      </div>
    </>
  );
};

export default CardCourses;
