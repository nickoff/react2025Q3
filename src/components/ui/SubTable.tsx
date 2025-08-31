import { memo } from 'react';
import { useFilter } from '../../hooks/useFilter';
import type { CountryData } from '../../types/data.type';

interface SubTableProps {
  width: number;
  countryData: CountryData[];
}

interface ColgroupProps {
  width: number;
  numberColumn: number;
}

const Colgroup = memo(function Colgroup(props: ColgroupProps) {
  const { width, numberColumn } = props;

  return (
    <colgroup>
      <col style={{ width: `90px` }} />
      <col style={{ width: `100px` }} />
      {Array.from({ length: numberColumn - 3 }).map((_, index) => (
        <col key={index} style={{ width: `${width / numberColumn}px` }} />
      ))}
      <col />
    </colgroup>
  );
});

const SubTable = memo(function SubTable(props: SubTableProps) {
  const { width, countryData } = props;
  const { filter } = useFilter();
  const { visibleFields } = filter;
  const cellBorder = 'border-1 border-gray-700 p-2';
  const numberColumn = Object.values(visibleFields).filter((item) => item).length;

  return (
    <tr className="bg-gray-700/30 border-2 border-emerald-300/30">
      <td colSpan={4}>
        <table className="text-[14px] w-full">
          <Colgroup width={width} numberColumn={numberColumn} />
          <thead>
            <tr>
              {visibleFields.year && <th className={cellBorder}>Year</th>}
              {visibleFields.population && <th className={cellBorder}>Population</th>}
              {visibleFields.co2 && (
                <th className={cellBorder}>
                  CO<sub>2</sub>
                </th>
              )}
              {visibleFields.co2_per_capita && (
                <th className={cellBorder}>
                  CO<sub>2</sub> per capita
                </th>
              )}
              {visibleFields.methane && <th className={cellBorder}>Methane</th>}
              {visibleFields.oil_co2 && (
                <th className={cellBorder}>
                  Oil CO<sub>2</sub>
                </th>
              )}
              {visibleFields.temperature_change_from_co2 && (
                <th className={cellBorder}>
                  Temperature change from CO<sub>2</sub>
                </th>
              )}
            </tr>
          </thead>
        </table>
        <div className="max-h-72 overflow-auto">
          <table className="text-[14px] w-full">
            <Colgroup width={width} numberColumn={numberColumn} />
            <tbody>
              {countryData.map((item, index) => {
                return (
                  <tr key={index}>
                    {visibleFields.year && <th className={cellBorder}>{item.year}</th>}
                    {visibleFields.population && <th className={cellBorder}>{item.population}</th>}
                    {visibleFields.co2 && <th className={cellBorder}>{item.co2}</th>}
                    {visibleFields.co2_per_capita && <th className={cellBorder}>{item.co2_per_capita}</th>}
                    {visibleFields.methane && <th className={cellBorder}>{item.methane}</th>}
                    {visibleFields.oil_co2 && <th className={cellBorder}>{item.oil_co2}</th>}
                    {visibleFields.temperature_change_from_co2 && (
                      <th className={cellBorder}>{item.temperature_change_from_co2}</th>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </td>
    </tr>
  );
});

export default SubTable;
