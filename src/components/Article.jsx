// eslint-disable-next-line react/prop-types
export const Article = ({ img, number, title, text, link }) => {
  return (
    <article className="flex h-[162px] md:w-[343px] md:flex-grow">
      <div className="w-[100px] flex-none">
        <img src={img} alt="" />
      </div>
      <div className="pl-6">
        <p className="text-GrayishBlue text-3xl mb-[16px] font-bold">
          {number}
        </p>
        <a href={link}>
          <h2 className="font-bold mb-[16px] hover:text-SoftOrange cursor-pointer">
            {title}
          </h2>
        </a>
        <p className="text-DarkGrayishBlue">{text}</p>
      </div>
    </article>
  );
};
