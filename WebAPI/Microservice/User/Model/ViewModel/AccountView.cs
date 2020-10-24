using System.Text.Json.Serialization;
using User.Model.Users;

namespace User.Model.ViewModel
{
    public class AccountView
    {
        [JsonPropertyName("_id")]
        public string ID { get; set; }
        public string Pseudo { get; set; }
        public string Email { get; set; }
        public UserProfil Profil { get; set; }
    }
}
