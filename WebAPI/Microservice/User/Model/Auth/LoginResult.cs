﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using User.Model.Security;

namespace User.Model.Auth
{
    public class LoginResult
    {
        public string Message { get; set; }
        [JsonPropertyName("jwtToken")]
        public JwtToken JwtToken { get; set; }
        [JsonPropertyName("refreshToken")]
        public RefreshToken RefreshToken { get; set; }
    }

}