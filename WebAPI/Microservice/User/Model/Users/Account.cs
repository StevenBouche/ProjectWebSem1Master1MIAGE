using AuthMiddleware;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using User.Model.Security;
using User.Model.ViewModel;

namespace User.Model.Users
{
    public class Account
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        [JsonPropertyName("_id")]
        public string ID { get; set; }
        public string Pseudo { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public UserProfil Profil { get; set; }
        public string Image { get; set; }
        public List<string> AdressIPAuthorize { get; set; } = new List<string>();
        [JsonPropertyName("refreshTokens")]
        public List<RefreshToken> RefreshTokens { get; set; } = new List<RefreshToken>();

        public AccountView ToAccountView()
        {
            return new AccountView
            {
                ID = this.ID,
                Pseudo = this.Pseudo,
                Email = this.Email,
                Profil = this.Profil.ToProfilView(),
                UrlPicture = "http://localhost:7000/account/picture/" + this.ID
            };
        }

        public UserIdentity ToUserIdentity(string ip)
        {
            return new UserIdentity
            {
                ID = this.ID,
                Email = this.Email,
                Pseudo = this.Pseudo,
                AddressIP = ip,
                Role = this.Profil.Role == 0 ? "ADMIN" : "USER",
                UrlPicture = "http://localhost:7000/account/picture/" + this.ID
            };
        }

        public void UpdateFromView(AccountView view)
        {
            this.Pseudo = Pseudo;
            this.Email = Email;
            this.Profil = Profil;
        }
    }
}
