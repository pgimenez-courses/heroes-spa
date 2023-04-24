import { useMemo } from 'react'
import { getHeroesByPublished } from '../helpers'
import { HeroCard } from './'

export const HeroList = ({ publisher }) => {
  
  const heroes = useMemo(() => getHeroesByPublished( publisher ), [publisher]) 
  
  return (
    <div className="row rows-cols-1 row-cols-1 row-cols-md-3 g-3">
      {
        heroes.map( hero => (
          <HeroCard
            key={ hero.id }
            { ...hero }
          />
        ))
      }
    </div>
  )
}
