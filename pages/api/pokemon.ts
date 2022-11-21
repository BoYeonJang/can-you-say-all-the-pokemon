import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

// GET /api/pokemon
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  // const { searchString } = req.query;
  const pokemons = await prisma.pokemon.findMany();
  res.json(pokemons);
}
