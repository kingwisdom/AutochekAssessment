import Location from '../../../model/location'
import { dbConnect, runMiddleware } from '../../../utils/index'
import morgan from 'morgan';

dbConnect();

export default async (req, res) => {
    const { method, body } = req;
    const morgans = morgan("dev");

    switch (method) {
        case "GET":
            try {
                const result = await Location.find();
                await runMiddleware(req, res, morgans);
                return res.status(200).json(result)
            } catch (error) {
                return res.status(400).json({ msg: error.message })
            }

        case "POST":
            try {
                const request = new Location(body);
                const saveLocation = await request.save();

                await runMiddleware(req, res, morgans);
                return res.status(200).json(saveLocation)
            } catch (error) {
                return res.status(400).json({ msg: error.message })
            }
    }
}