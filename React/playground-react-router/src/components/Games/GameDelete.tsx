import { redirect, type ActionFunctionArgs } from "react-router-dom";
import { deleteGame } from "../../services/games";
 
export async function action({ params }: ActionFunctionArgs) {
  const gameId = Number(params.gameId);

  await deleteGame(gameId);
  return redirect("/games");
}