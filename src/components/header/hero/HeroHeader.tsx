import React, { FormEvent, useEffect, useState } from 'react'
import { cities } from '../../../shared/utils';
type Props = {
  setFiltered: Function;
}
function HeroHeader({ setFiltered }: Props) {
  const [filter, setFilter] = useState<string>('');

  const onFilterChange = (event: FormEvent<HTMLInputElement>) => {
    setFilter(event.currentTarget.value);
  };

  const resetFilter = () => {
    setFilter('');
  };

  useEffect(() => {
    const filtered = () => {
      const cities_filtered = cities.filter(c =>
        c.name.toLowerCase().includes(filter.toLocaleLowerCase()) || filter === '');
      setFiltered(cities_filtered.length ? cities_filtered : cities);
    };
    filtered();
  }, [filter]);

  return (
    <header>
      <section className="filters">
        <div className="wrapper-filter">
          <input type="text" placeholder="Search City" value={filter} onChange={onFilterChange} />
          <button type="button" onClick={resetFilter}>All places</button>
        </div>
      </section>
      <h1 className="hero-title">World <span className="bold">Weather</span></h1>
    </header>
  )
}

export default HeroHeader