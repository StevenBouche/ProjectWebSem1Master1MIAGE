using Forum.Models.View;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Forum.Models
{
    public class ForumObj
    {
        [JsonPropertyName("_id")]
        public string Id { get; set; }
        [JsonPropertyName("urlPicture")]
        public string UrlPicture { get; set; }
        [JsonPropertyName("name")]
        public string Name { get; set; }
        [JsonPropertyName("description")]
        public string Description { get; set; }
        [JsonPropertyName("channels")]
        public List<Channel> Channels { get; set; }
        [JsonPropertyName("users")]
        public List<User> Users { get; set; }

        public ForumView ToViewForum()
        {
            return new ForumView
            {
                Name = this.Name,
                Description = this.Description,
                UrlPicture = this.UrlPicture,
                NbOnline = 0,
                NbMember = this.Users.Count
            };
        }
    }
}
