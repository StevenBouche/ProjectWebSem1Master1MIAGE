using System.Text.Json.Serialization;
using User.Model.Users;

namespace User.Model.ViewModel
{
    public class AccountView
    {
        [JsonPropertyName("_id")]
        public string ID { get; set; }
        [JsonPropertyName("pseudo")]
        public string Pseudo { get; set; }
        [JsonPropertyName("email")]
        public string Email { get; set; }
        [JsonPropertyName("profil")]
        public ProfilView Profil { get; set; }
    }
}
