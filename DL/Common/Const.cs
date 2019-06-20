using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace DL.Common
{
    public class Const
    {
        public static readonly string ConnectionString = GetConnectionString();

        private static string GetConnectionString()
        {
            var configurationBuilder = new ConfigurationBuilder();

            configurationBuilder.AddJsonFile("appsettings.json", optional: false);

            var configuration = configurationBuilder.Build();

            return configuration.GetConnectionString("DefaultConnection");
        }
    }
}
