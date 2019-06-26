using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DL.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class FilesController : ControllerBase
    {
        //[HttpGet]
        //public FileStream Download(string fileName)
        //{
        //    string fileDirectory = Directory.GetCurrentDirectory() + "\\repo";
            
        //    string fullPath = Path.Combine(fileDirectory, fileName);

        //    if (!System.IO.File.Exists(fullPath))
        //    {
        //        throw new Exception("File not exists!");
        //    }

        //    return new FileStream(fullPath, FileMode.Open, FileAccess.Read);
        //}

        [HttpGet]
        public FileResult Download(string fileName)
        {
            string fileDirectory = Directory.GetCurrentDirectory() + "\\repo";

            string fullPath = Path.Combine(fileDirectory, fileName);

            if (!System.IO.File.Exists(fullPath))
            {
                throw new Exception("File not exists!");
            }

            return File(new FileStream(fullPath, FileMode.Open, FileAccess.Read), "image/jpg", "cake.jpg");
        }
    }
}