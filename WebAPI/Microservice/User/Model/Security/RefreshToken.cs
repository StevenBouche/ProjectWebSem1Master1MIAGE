using System.Text.Json.Serialization;

namespace User.Model.Security
{
    public class RefreshToken
    {
        [JsonPropertyName("refreshToken")]
        public string Token { get; set; }

        [JsonPropertyName("expireAt")]
        public double ExpireAt { get; set; }

        public string AddressIP { get; set; }
    }
}
