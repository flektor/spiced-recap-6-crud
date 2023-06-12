import Place from "../../../../db/models/place";
import dbConnect from "../../../../db/connect";

export default async function handler(request, response) {
  if (!request.query.id) {
    return;
  }

  await dbConnect();

  if (request.method === "GET") {
    getPlace(request, response);
  }

  if (request.method === "PATCH") {
    editPlace(request, response);
  }

  async function getPlace(_request, response) {
    const place = await Place.findById(request.query.id);
    return response.status(200).json(place);
  }

  async function editPlace(request, response) {
    const placeToUpdate = await Place.findByIdAndUpdate(request.query.id, {
      $set: request.body,
    });

    return response.status(200).json(placeToUpdate);
  }
}
