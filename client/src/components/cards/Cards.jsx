import { Card } from '../card/Card'
import { CardsComponent } from './StylesCards'

export const Cards = ({ videogames }) => {
  return (
    <CardsComponent>
      {
        videogames.map(vg => <Card videogame={vg} key={vg.id} />)
      }
    </CardsComponent>
  )
}
