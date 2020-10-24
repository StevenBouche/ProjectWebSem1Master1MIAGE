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
                Profil = this.Profil
            };
        }

        public UserIdentity ToUserIdentity(string ip)
        {
            return new UserIdentity
            {
                ID = this.ID,
                Email = this.Email,
                AddressIP = ip
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
