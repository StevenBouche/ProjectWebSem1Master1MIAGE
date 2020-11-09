using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Forum.Models.View
{
    public class SubscribeResultView
    {
        [JsonPropertyName("message")]
        public string Message { get; set; }
        [JsonPropertyName("result")]
        public bool Result { get; set; }
        [JsonPropertyName("idForum")]
        public string IdForum { get; set; }
        [JsonPropertyName("idUser")]
        public string IdUser { get; set; }
    }
}
