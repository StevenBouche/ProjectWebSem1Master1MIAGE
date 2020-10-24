using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace Restaurant.Model
{
    public class SearchRestaurants
    {
        public int? page { get; set; }
        public int? pagesize { get; set; }
        public string name { get; set; }

        public Boolean IsValid()
        {
            return this.page != null && this.pagesize != null && name != null;
        }

    }

    public class Address
    {
        public string building { get; set; }
        public string street { get; set; }
        public string zipcode { get; set; }
        public double[] coord { get; set; }
    }


    public class Grade
    {
        public DateTime date { get; set; }
        public string grade { get; set; }
        public int? score { get; set; }
    }

    public class RestaurantModel
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string _id { get; set; }
        public string restaurant_id { get; set; }
        public string borough { get; set; }
        public string name { get; set; }
        public string cuisine { get; set; }
        public Address address { get; set; }
        public Grade[] grades { get; set; }

        public Boolean Is(string id)
        {
            return this._id != null && this._id.Equals(id);
        }

    }
}
