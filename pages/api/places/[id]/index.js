import Place from "../../../../db/models/place";
import dbConnect from "../../../../db/connect";

async function getPlace(request, response) {
  const place = await Place.findById(request.query.id);
  return response.status(200).json(place);
}

async function editPlace(request, response) {
  const placeToUpdate = await Place.findByIdAndUpdate(request.query.id, {
    $set: request.body,
  });
  return response.status(200).json(placeToUpdate);
}

async function deletePlace(request, response) {
  const placeToDelete = await Place.findByIdAndDelete(request.query.id);
  return response.status(200).json(placeToDelete);
}

export default async function handler(request, response) {
  if (!request.query.id) {
    return;
  }

  await dbConnect();

  switch (request.method) {
    case "GET":
      return getPlace(request, response);

    case "PATCH":
      return editPlace(request, response);

    case "DELETE":
      return deletePlace(request, response);
  }
}
