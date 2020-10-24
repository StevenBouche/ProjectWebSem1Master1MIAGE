using MongoDBAccess;
using Restaurant.Model;
using System.Collections.Generic;
using System.Linq;
using MongoDB.Driver;

namespace Restaurant.Services
{

    public class RestaurantManager : IRestaurantManager
    {

        private readonly IMongoDBContext<RestaurantModel> Context;

        public RestaurantManager(IMongoDBContext<RestaurantModel> context)
        {
            this.Context = context;
        }

        public RestaurantModel Create(RestaurantModel rest)
        {
            this.Context.GetCollection().InsertOne(rest);
            return rest;
        }

        public List<RestaurantModel> Get()
        {
            return this.Context.GetQueryable().ToList();
        }


        public List<RestaurantModel> Get(SearchRestaurants search)
        {

            IQueryable<RestaurantModel> query = this.Context.GetQueryable();

            if (!string.IsNullOrEmpty(search.name))
                query = query.Where(RestaurantModel => RestaurantModel.name.Contains(search.name));

            int total = query.Count(),
                pagesize = search.pagesize ?? 0,
                page = search.page ?? 0;

            if (pagesize <= 0 || page <= 0 || total <= 0)
                return new List<RestaurantModel>();

            int nbPageMax = pagesize <= total ? (int)total / pagesize : pagesize > total ? 1 : 0;

            if (page <= nbPageMax)
            {
                return query.Skip(pagesize * (page - 1)).Take(pagesize).ToList();
            }
            else return new List<RestaurantModel>();
        }

        public RestaurantModel Get(string id)
        {
            return this.Context.GetQueryable().FirstOrDefault(RestaurantModel => RestaurantModel._id.Equals(id));
        }

        public void Remove(RestaurantModel bookIn)
        {
            this.Remove(bookIn._id);
        }

        public void Remove(string id)
        {
            this.Context.GetCollection().DeleteOne(rest => rest._id.Equals(id));
        }

        public void Update(string id, RestaurantModel rest)
        {
            this.Context.GetCollection().ReplaceOne(rest => rest._id.Equals(id), rest);
        }
    }
}
