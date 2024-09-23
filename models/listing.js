const mongoose = require("mongoose");
const listingSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description: String,
    image: {
        type:String,
        set: (v) => v === "" ? "https://unsplash.com/photos/trees-beside-white-house-IYfp2Ixe9nM" : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Lisitng", listingSchema);
module.exports = Listing;