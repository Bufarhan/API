using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Tests.MockData
{
    public class FileManagerData
    {
              public static List<FileResponse> GetFileResponses()
        {
            return new List<FileResponse>
            {
                new FileResponse{Id=Guid.NewGuid().ToString(),
                Title="file1",
                CreatedDate=DateTime.Now,
                Size=10,
                Type="png"}
                ,
                  new FileResponse{Id=Guid.NewGuid().ToString(),
                Title="file2",
                CreatedDate=DateTime.Now,
                Size=10,
                Type="JPG"}
            };
        }
    }
}
