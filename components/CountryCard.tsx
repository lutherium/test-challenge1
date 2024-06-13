import Image from "next/image";

export const CountryCard = (props: any) => {
  const { handleClick, info } = props;

  return (
    <button
      className="flex flex-col sm:w-full lg:w-[250px]"
      onClick={() => handleClick(info.alpha3Code)}
    >
      <div className="relative lg:w-[250px] sm:w-full h-[200px]">
        <Image
          alt="Country Flag"
          className="rounded"
          layout="fill"
          objectFit="cover"
          src={info.flags.svg}
        />
      </div>
      <div className="lg:w-[250px] sm:w-full p-5 bg-primary text-left">
        <div className="text-xl mb-5">{info.name}</div>
        <div>Population: {info.population}</div>
        <div>Region: {info.region}</div>
        <div>Capital: {info.capital}</div>
      </div>
    </button>
  );
};
