import { Schema, model, models } from "mongoose"

const LocationSchema = new Schema({

    locationName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 90
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: 90
    },
    Website: {
        type: String,
        trim: true,
        maxlength: 90
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        maxlength: 12
    },
    contactPerson: {
        type: String,
        required: true,
        trim: true,
        maxlength: 90
    },
    lontitude: {
        type: String,
        required: true,
        trim: true,
        maxlength: 90
    },
    latitude: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    radius: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
},
    {
        timestamps: true,
        versionKey: false
    }
)

export default models.Location || model("Location", LocationSchema)