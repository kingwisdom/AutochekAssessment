import Location from '../../../model/location'
import { dbConnect, runMiddleware } from '../../../utils/index'
import morgan from 'morgan';

dbConnect();

export default async (req, res) => {
    const { method, body, query: { id } } = req;
    const morgans = morgan("dev");

    switch (method) {
        case "GET":
            try {
                const result = await Location.findById(id);
                if (!result) return res.status(404).json({ msg: "Location does not exists" })
                await runMiddleware(req, res, morgans);
                return res.status(200).json(result)
            } catch (error) {
                return res.status(400).json({ msg: error.message })
            }

        case "DELETE":
            try {
                const deleteResult = await Location.findByIdAndDelete(id);
                if (!deleteResult) return res.status(404).json({ msg: "Location does not exists" })
                await runMiddleware(req, res, morgans);
                return res.status(204).json()
            } catch (error) {
                return res.status(400).json({ msg: error.message })
            }

        case "PUT":
            try {
                const request = new Location.findOneAndUpdate(id, body, {
                    new: true,
                    runValidators: true
                });
                if (!request)
                    return res.status(404).json({ msg: "Location doesn't exist" })
                return res.status(200).json(request)

            } catch (error) {
                return res.status(400).json({ msg: error.message })
            }

        default:
            return res.status(400).json({ msg: error.message });


    }
}