import { Schema, Types, model, models, Document } from "mongoose";

export interface IEvent extends Document{
    _id: String;
    title: String;
    description?: String;
    location?: String;
    createdAt: Date;
    imageUrl: String; 
    startDateTime: Date;
    endDateTime: Date;
    price?: String;
    isFree: boolean;
    url?: String;
    category: {_id: String, name: String}
    organizer: {_id: String, firstName: String, lastName: String}
}

const EventSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String},
    location: {type: String},
    createdAt: {type: String, default: Date.now},
    imageUrl: {type: String, required: true},
    startDateTime: {type: String, default: Date.now},
    endDateTime: {type: String, default: Date.now},
    price: {type: String},
    isFree: {type: Boolean, default: false},
    url: {type: String},
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
    organizer: {type: Schema.Types.ObjectId, ref: 'user'},
})

const Event = models.Event || model('Event', EventSchema);

export default Event;