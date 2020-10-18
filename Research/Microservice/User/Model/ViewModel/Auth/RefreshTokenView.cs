using System.Text.Json.Serialization;

namespace User.Model.ViewModel.Auth
{
    public class RefreshTokenView
    {
        [JsonPropertyName("refreshToken")]
        public string Token { get; set; }
    }
}
