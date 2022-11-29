import React, { useContext } from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';

const Repos = () => {
  const { repos } = useContext(GithubContext)

  // ATTENTION HERE!!! BIG POINT!!! This is the hardest part.
  let languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;
    if ( !total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      total[language] = { 
        ...total[language], 
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count
      };
    }
    return total;
  }, {})

  languages = Object.values(languages) // turn {} into [] data type. 
  const chartData = languages;

  // top 5 used languages
  let top5Languages = languages.sort((a, b) => { // sort out the most popular language
      return b.value - a.value;
    }).slice(0, 5);

  // most stars per language
  const starsPerLanguage = languages.sort((a, b) => {
      return b.stars - a.stars
    })
    .map(item => {
      return { ...item, value: item.stars}
    })
    .slice(0, 5)

  // stars, forks
  let {stars, forks} = repos.reduce((total, item) => {
    const { stargazers_count, name, forks } = item;
    total.stars[stargazers_count] = { label: name, value: stargazers_count }
    total.forks[forks] = { label: name, value: forks }
    return total;
  }, { 
    stars: {}, 
    forks: {}
  })
  // turn stars {} into [] --> Object.values(stars)
  stars = Object.values(stars).slice(-5).reverse()
  forks = Object.values(forks).slice(-5).reverse()
  // console.log(stars)
  // console.log('forks', forks)


  return <section className='chart-container'>
    <div className='parent-chart'>
      <div className="chart">
        <Pie3D data={top5Languages}/>
      </div>
      <div className="chart">
      <Bar3D data={forks} />
     </div>
    </div>
    <div className='parent-chart'>
     <div className="chart">
      <Doughnut2D data={starsPerLanguage} />
     </div>
     <div className="chart">
        <Column3D data={stars} />
      </div>
    </div>
    </section>;
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;
export default Repos;
