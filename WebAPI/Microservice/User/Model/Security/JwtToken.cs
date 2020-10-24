using System.Text.Json.Serialization;

namespace User.Model.Security
{
    public class JwtToken
    {
        [JsonPropertyName("accessToken")]
        public string AccessToken { get; set; }

        [JsonPropertyName("expireAt")]
        public double ExpireAt { get; set; }

    }
}
