using Restaurant.Model;
using System.Collections.Generic;

namespace Restaurant.Services
{
    public interface IRestaurantManager
    {
        List<RestaurantModel> Get();
        List<RestaurantModel> Get(SearchRestaurants search);
        RestaurantModel Get(string id);
        RestaurantModel Create(RestaurantModel book);
        void Update(string id, RestaurantModel bookIn);
        void Remove(RestaurantModel bookIn);
        void Remove(string id);

    }
}
