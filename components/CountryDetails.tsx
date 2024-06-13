import { Button } from "@nextui-org/button";
import Image from "next/image";

export const CountryDetails = (props: any) => {
  const { info, handleBorderClick } = props;
  console.log(info);

  return (
    <div className="w-full flex lg:flex-row sm:flex-col justify-between gap-20">
      <div className="relative lg:w-[500px] sm:w-full sm:h-[70vw] lg:h-full">
        <Image
          alt="Country Flag"
          className="rounded"
          layout="fill"
          objectFit="cover"
          src={info.flags.svg}
        />
      </div>
      <div className="flex flex-col justify-evenly lg:w-[500px] sm:w-full h-[400px]">
        <div>{info.name}</div>
        <div className="w-full flex justify-between">
          <div className="flex flex-col gap-5">
            <div>Native Name: {info.nativeName}</div>
            <div>Population: {info.population}</div>
            <div>Region: {info.region}</div>
            <div>Sub Region: {info.subregion}</div>
            <div>Capital: {info.capital}</div>
          </div>
          <div className="flex flex-col gap-5">
            <div>Top Level Domain: {info.topLevelDomain}</div>
            <div>Currencies: {info.currencies[0].name}</div>
            <div>
              Languages: {info.languages.map((val: any) => `${val.name} `)}
            </div>
          </div>
        </div>
        {info.borders === undefined ? (
          ""
        ) : (
          <div>
            Border Countries:{" "}
            {info.borders.map((val: any, ind: any) => (
              <Button
                key={ind}
                className="m-2"
                onClick={() => handleBorderClick(val)}
              >
                {val}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
