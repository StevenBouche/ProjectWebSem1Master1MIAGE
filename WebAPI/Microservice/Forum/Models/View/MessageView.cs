using System.Text.Json.Serialization;

namespace Forum.Models.View
{
    public class MessageView
    {

        [JsonPropertyName("id")]
        public string Id { get; set; }
        [JsonPropertyName("value")]
        public string Value { get; set; }
        [JsonPropertyName("timestamp")]
        public double Timestamp { get; set; }
        [JsonPropertyName("users")]
        public UserView Users{ get; set; }

    }
}