using API.Contracts;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FileManagerController : ControllerBase
    {

        private readonly IFileManagerService _fileManagerService;

        public FileManagerController(IFileManagerService fileManagerService)
        {
            _fileManagerService = fileManagerService;
        }



        [HttpGet("GetAll")]
        public ActionResult<List<FileResponse>> GetAll() =>
             Ok(_fileManagerService.GetAll());


        [HttpPost("Add")]
        public ActionResult<FileResponse> AddOrUpdate()
        {


            var file = Request.Form.Files.FirstOrDefault();
            var model = new FileCreateRequest { File = file };

            return Ok(_fileManagerService.Add(model));

        }
    }
}