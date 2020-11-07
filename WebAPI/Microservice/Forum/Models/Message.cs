﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Forum.Models
{
    public class Message
    {
        [JsonPropertyName("_id")]
        public string Id { get; set; }
        [JsonPropertyName("value")]
        public string Value { get; set; }
        [JsonPropertyName("timestamp")]
        public double Timestamp { get; set; }
        [JsonPropertyName("userId")]
        public string UserId { get; set; }
    }
}