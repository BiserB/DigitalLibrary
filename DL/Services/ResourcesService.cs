using DL.Common;
using DL.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace DL.Services
{
    public class ResourcesService
    {
        public IEnumerable<Resource> GetResources()
        {
            List<Resource> resources = new List<Resource>();

            using (SqlConnection connection = new SqlConnection(Const.ConnectionString))
            {
                SqlCommand command = new SqlCommand("getAllResources", connection);

                command.CommandType = CommandType.StoredProcedure;

                connection.Open();

                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    Resource resource = new Resource();

                    resource.Id = Convert.ToInt32(reader["Id"]);
                    resource.Name = reader["Name"].ToString();
                    resource.Link = reader["Link"].ToString();

                    resources.Add(resource);
                }

                connection.Close();
            }

            return resources;
        }
    }
}
