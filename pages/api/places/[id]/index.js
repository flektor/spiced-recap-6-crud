import Place from "../../../../db/models/place";
import dbConnect from "../../../../db/connect";

export default async function handler(request, response) {
  const { id } = request.query;

  if (!id) {
    return;
  }

  await dbConnect();

  if (request.method === "GET") {
    const place = await Place.findById(id);
    return response.status(200).json(place);
  }
}
