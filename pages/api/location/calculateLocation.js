import Location from '../../../model/location'
import { dbConnect, runMiddleware } from '../../../utils/index'
import morgan from 'morgan';

dbConnect();

export default async (req, res) => {
    const { method, body } = req;
    const morgans = morgan("dev");

    switch (method) {

        case "POST":
            try {
                const request = new Location(body);
                const calulate = await request.save();

                await runMiddleware(req, res, morgans);
                return res.status(200).json(calulate)
            } catch (error) {
                return res.status(400).json({ msg: error.message })
            }
    }
}