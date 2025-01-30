'use client';
import GameItem from "../ux/gameitems";
import { Igames } from "../../types/games";


const Catalogsmini = ()=>{
  const catalogsmini: Igames[]=[
    {_id:"1", title: "7 Wonders Duel", description: "In 7 Wonders Duel, each player leads a civilization and over the course of 3 Ages, constructs buildings and wonders. Live the experience of an intense struggle for supremacy in the Ancient world!", category: "" , language: "ENG", age: "10" , players: "2", img: "/games/7 Wonders Duel.webp"},
    {_id:"2", title: "Azul", description: "In the game Azul, players take turns drafting colored tiles from suppliers to their player board. Later in the round, players score points based on how they've placed their tiles to decorate the palace. Extra points are scored for specific patterns and completing sets; wasted supplies harm the player's score.", category: "" , language: "ENG", age: "10" , players: "2", img: "/games/Azul.webp"},
    {_id:"3", title: "Carcassonne ", description: "Players choose from tiles that depict cities, roads, monasteries, and fields; each new tile placed creates an ever-expanding board on which players can then add their followers. Players score points by having followers on features as they're completed.", category: "" , language: "ENG", age: "10" , players: "2", img: "/games/carcassonne.png"},
    {_id:"4", title: "Flamecraft", description: "Flamecraft is a game of dragon placement and engine building. On your turn, you will place a dragon on one of the shops in town to visit it, and choose to either collect resources or enchant the shop. Then, fire up the dragons and let them do their thing! Finally, expand the town with a new shop.", category: "" , language: "ENG", age: "10" , players: "2", img: "/games/Flamecraft.webp"},
    {_id:"5", title: "Hues and Cues", description: "Hues and Cues is a dynamic color communication game that challenges players to connect colors to words. Using only one or two word clues, players try to help others guess a specific shade from the 480 colors on the game board.", category: "" , language: "ENG", age: "10" , players: "2", img: "/games/HuesandCues.jpg"},
    {_id:"6", title: "Root ", description: "Root is a game of adventure and war in which 2 to 4 (1 to 6 with the 'Riverfolk' expansion) players battle for control of a vast wilderness. Like Vast: The Crystal Caverns, each player in Root has unique capabilities and a different victory condition.!", category: "" , language: "ENG", age: "10" , players: "2", img: "/games/Root.webp"},
  ]
	  return (

      <section className="mission-section bg-[#050119] text-white py-16 px-6">
      <div className="container mx-auto text-center space-y-12">
        {/* Заголовок */}
        <h2 className="text-3xl font-bold">Playing together</h2>
        <h3 className="text-4xl font-semibold text-[#394DFF]">GAME COLLECTION</h3>
      <div className="flex justify-start flex-wrap">
         {catalogsmini.map(games =>
          <GameItem 
          key={games._id}
          title={games.title} 
          description={games.description}
          img={games.img}
          />
        )}
        
        </div>

      </div>
      </section>
      )
}
export default  Catalogsmini