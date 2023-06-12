import Place from "../../../db/models/place";
import dbConnect from "../../../db/connect";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    return getPlaces(request, response);
  }

  if (request.method === "POST") {
    return addPlace(request, response);
  }
}

async function getPlaces(_request, response) {
  const places = await Place.find();
  return response.status(200).json(places);
}

async function addPlace(request, response) {
  try {
    await new Place(request.body).save();
    return response.status(201).json({ status: "Place created." });
  } catch (error) {
    console.error(error);
    return response.status(400).json({ error: error.message });
  }
}
