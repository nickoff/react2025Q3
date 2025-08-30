import type { CountryData } from '../../types/data.type';

interface SubTableProps {
  width: number;
  countryData: CountryData[];
}

interface ColgroupProps {
  width: number;
  numberColumn: number;
}

const Colgroup = (props: ColgroupProps) => {
  const { width, numberColumn } = props;

  return (
    <colgroup>
      {Array.from({ length: numberColumn - 1 }).map((_, index) => (
        <col key={index} style={{ width: `${width / numberColumn}px` }} />
      ))}
      <col />
    </colgroup>
  );
};

export const SubTable = (props: SubTableProps) => {
  const { width, countryData } = props;
  const cellBorder = 'border-1 border-gray-700 p-2';
  const numberColumn = Object.keys(countryData[0]).length;

  return (
    <tr className="bg-gray-700/30 border-2 border-emerald-300/30">
      <td colSpan={4}>
        <table className="text-base w-full">
          <Colgroup width={width} numberColumn={numberColumn} />
          <thead>
            <tr>
              <th className={cellBorder}>Year</th>
              <th className={cellBorder}>Population</th>
              <th className={cellBorder}>
                CO<sub>2</sub>
              </th>
              <th className={cellBorder}>
                CO<sub>2</sub> per capita
              </th>
            </tr>
          </thead>
        </table>
        <div className="h-72 overflow-auto">
          <table className="text-base w-full">
            <Colgroup width={width} numberColumn={numberColumn} />
            <tbody>
              {countryData.map((item, index) => {
                return (
                  <tr key={index}>
                    <th className={cellBorder}>{item.year}</th>
                    <th className={cellBorder}>{item.population}</th>
                    <th className={cellBorder}>{item.co2}</th>
                    <th className={cellBorder}>{item.co2_per_capita}</th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </td>
    </tr>
  );
};
