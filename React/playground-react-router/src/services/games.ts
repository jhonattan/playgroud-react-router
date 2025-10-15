import data from "./data/data.json"

const games = data.games

export type Game = {
  id: number,
  name: string,
  description: string
} 

export function getGames() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(games);
    }, 800);
  });
}
 
export function getGame(id: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const game = games.find((game) => game.id === id);
 
      if (game) {
        resolve(game);
      } else {
        reject(new Error(`Game with id ${id} not found`));
      }
    }, 800);
  });
}

export function editGame(updatedGame: Game) {
  const index = games.findIndex(game => game.id === updatedGame.id)

  if (index) {
    games[index] = updatedGame
  }
}

export function deleteGame(id: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const gameIndex = games.findIndex(game => game.id === id);

      if (gameIndex !== -1) {
        games.splice(gameIndex, 1);
        resolve(games);
      } else {
        reject(new Error(`Game with id ${id} not found`));
      }
    }, 800);
  });
}

export function getStoredGame(id: number, key: string) {
  const storedData = localStorage.getItem(`${id}${key}`)
  const storedUpdatedElement = storedData ? JSON.parse(storedData) : null  
  
  return storedUpdatedElement;
}