using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Forum.Models
{
    public class Channel
    {
        [JsonPropertyName("_id")]
        public string Id { get; set; }
        [JsonPropertyName("name")]
        public string Name { get; set; }
        [JsonPropertyName("messages")]
        public List<Message> Messages { get; set; }
    }
}