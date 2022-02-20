import { Character } from "interfaces/character";

const Card = ( { name }: Character) => {

  return(
    <div className="card"> 
      <div className="card-image"> 
        {
          name
        }
      </div>
    </div>
  )

};

export default Card;