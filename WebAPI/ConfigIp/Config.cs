using System;

namespace ConfigIp
{
    public class Config
    {

        public static bool isDev = true;
        public static string URL = isDev ? "http://localhost:7000" : "http://51.210.181.145:7000";

    }
}
