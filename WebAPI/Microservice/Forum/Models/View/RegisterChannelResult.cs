﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Forum.Models.View
{
    public class RegisterChannelResult
    {
        [JsonPropertyName("message")]
        public string Message { get; set; }
        [JsonPropertyName("forum")]
        public ForumView Forum { get; set; }
        [JsonPropertyName("channel")]
        public ChannelView Channel { get; set; }
    }
}
