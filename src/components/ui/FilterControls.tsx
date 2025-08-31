import { Suspense, useCallback, useState } from 'react';
import type { Country } from '../../types/data.type';
import { useFilter } from '../../hooks/useFilter';
import type { SortCountryBy } from '../../types/context.type';
import { Loading } from './Loading';
import React from 'react';

const Modal = React.lazy(() => import('./Modal'));

export const FilterControls = ({ data }: { data: Country[] }) => {
  const [year, setYear] = useState('');
  const [country, setCountry] = useState('');
  const [sortCountry, setSortCountry] = useState<SortCountryBy>('nameAsc');
  const { filter, setFilter } = useFilter();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [formData, setFormData] = useState(filter.visibleFields);

  const yearsSet = new Set<number>();
  data.forEach((country) => country.data.forEach((data) => yearsSet.add(data.year)));
  const years = Array.from(yearsSet);

  const handleYearChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedYear = e.target.value;
      setYear(selectedYear);
      setFilter({ ...filter, year: Number(selectedYear) });
    },
    [filter, setFilter]
  );

  const handleCountryChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedCountry = e.target.value;
      setCountry(selectedCountry);
      setFilter({ ...filter, searchCountry: selectedCountry });
    },
    [filter, setFilter]
  );

  const handleSortCountryChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedSortType = e.target.value as SortCountryBy;
      setSortCountry(selectedSortType);
      setFilter({ ...filter, sortCountryBy: selectedSortType });
    },
    [filter, setFilter]
  );

  const handleModalToggle = useCallback(() => {
    setIsOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return (
    <div className="flex w-full uppercase gap-4 items-center">
      <h4 className="text-base font-bold text-gray-400">Filters:</h4>
      <input
        className="text-base p-1 bg-gray-500 outline-0 placeholder:uppercase"
        placeholder="Search country..."
        type="text"
        value={country}
        id="country"
        onChange={handleCountryChange}
      />
      <input
        className="text-base p-1 bg-gray-500 outline-0 placeholder:uppercase"
        placeholder="Select year..."
        type="text"
        list="years-list"
        value={year}
        id="year"
        onChange={handleYearChange}
      />
      <datalist id="years-list">
        {years && years.map((year, index) => <option key={index} value={year.toString()}></option>)}
      </datalist>
      <h4 className="text-base font-bold text-gray-400">Sort country by:</h4>
      <select
        className="text-base p-1 bg-gray-500 outline-0 uppercase"
        name="sortCountry"
        id="sortCountry"
        onChange={handleSortCountryChange}
        value={sortCountry}>
        <option value="nameAsc">name(asc)</option>
        <option value="nameDesc">name(desc)</option>
        <option value="populationAsc">population(asc)</option>
        <option value="populationDesc">population(desc)</option>
      </select>
      <button
        onClick={handleModalToggle}
        className="text-base font-bold text-gray-500 p-1 border-1 bg-emerald-300 border-emerald-300 uppercase transition-colors duration-300 hover:text-gray-600 hover:bg-emerald-400 cursor-pointer">
        + add field
      </button>
      <Suspense fallback={<Loading />}>
        <Modal isOpen={isOpenModal} onClose={handleModalToggle}>
          <div className="flex flex-col gap-2 text-gray-300 text-xl uppercase">
            <h5 className="text-[18px] text-emerald-300 font-bold my-5">Add fields to dataset</h5>
            <form>
              <label className="flex items-center gap-1.5 text-base" htmlFor="methane">
                <input
                  className="flex items-center gap-1.5 text-base"
                  type="checkbox"
                  name="methane"
                  id="methane"
                  checked={formData.methane}
                  onChange={() => {
                    setFormData({ ...formData, methane: !formData.methane });
                    setFilter({
                      ...filter,
                      visibleFields: {
                        ...filter.visibleFields,
                        methane: !formData.methane,
                      },
                    });
                  }}
                />
                methane
              </label>
              <label className="flex items-center gap-2 text-base" htmlFor="oil_co2">
                <input
                  className="text-base"
                  type="checkbox"
                  name="oil_co2"
                  id="oil_co2"
                  checked={formData.oil_co2}
                  onChange={() => {
                    setFormData({ ...formData, oil_co2: !formData.oil_co2 });
                    setFilter({
                      ...filter,
                      visibleFields: {
                        ...filter.visibleFields,
                        oil_co2: !formData.oil_co2,
                      },
                    });
                  }}
                />
                oil co<sub>2</sub>
              </label>
              <label className="flex items-center gap-2 text-base" htmlFor="temperature_change_from_co2">
                <input
                  className="text-base"
                  type="checkbox"
                  name="temperature_change_from_co2"
                  id="temperature_change_from_co2"
                  checked={formData.temperature_change_from_co2}
                  onChange={() => {
                    setFormData({ ...formData, temperature_change_from_co2: !formData.temperature_change_from_co2 });
                    setFilter({
                      ...filter,
                      visibleFields: {
                        ...filter.visibleFields,
                        temperature_change_from_co2: !formData.temperature_change_from_co2,
                      },
                    });
                  }}
                />
                temperature change from co<sub>2</sub>
              </label>
            </form>
          </div>
        </Modal>
      </Suspense>
    </div>
  );
};
