using Microsoft.AspNetCore.Mvc;
using Restaurant.Model;
using Restaurant.Services;
using System.Collections.Generic;

namespace Restaurant.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class RestaurantsController : ControllerBase
    {

        private readonly IRestaurantManager Manager;

        public RestaurantsController(IRestaurantManager manager)
        {
            this.Manager = manager;
        }

        // GET: api/<RestaurantController>
        [HttpGet]
        public ActionResult<IEnumerable<RestaurantModel>> Get([FromQuery] SearchRestaurants search)
        {

            if (search is null) search = new SearchRestaurants { page = 1, pagesize = 10, name = "" };

            return Ok(this.Manager.Get(search));
        }

        // GET api/<RestaurantController>/5
        [HttpGet("{id}")]
        public RestaurantModel Get(string id)
        {
            return this.Manager.Get(id);
        }

        // POST api/<RestaurantController>
        [HttpPost]
        public void Post([FromBody] RestaurantModel value)
        {
            this.Manager.Create(value);
        }

        // PUT api/<RestaurantController>/5
        [HttpPut("{id}")]
        public void Put(string id, [FromBody] RestaurantModel value)
        {
            this.Manager.Update(id, value);
        }

        // DELETE api/<RestaurantController>/5
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            this.Manager.Remove(id);
        }



    }
}
