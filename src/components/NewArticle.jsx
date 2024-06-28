// eslint-disable-next-line react/prop-types
export const NewArticle = ({ title, text, link }) => {
  console.log(title);
  return (
    <article className="h-[140px] border-b-2 border-GrayishBlue py-7 last:border-none lg:h-[165px] lg:py-5">
      <a href={link}><h2 className="cursor-pointer hover:text-SoftOrange text-[20px] mb-3 font-bold lg:text-[16px] xl:text-[20px]">
        {title}
      </h2>
      </a>
      <p className="text-[13px]">{text}</p>
    </article>
  );
};
