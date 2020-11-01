using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using User.Model.Users;

namespace User.Model.ViewModel
{
    public class ProfilView
    {
        [JsonPropertyName("firstName")]
        public string FirstName { get; set; }
        [JsonPropertyName("lastName")]
        public string LastName { get; set; }
        [JsonPropertyName("birthdayDate")]
        public DateTime BirthdayDate { get; set; }
        [JsonPropertyName("role")]
        public UserRole Role { get; set; }

    }
}
