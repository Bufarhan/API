using API.Contracts;
using API.Models;
using System.Text.Json;

namespace API.Services
{
    public class FileManagerService : IFileManagerService
    {
        private readonly IConfiguration _Configuration;
        private readonly string _repositoryPath;
        public FileManagerService(IConfiguration Configuration)
        {
            _Configuration = Configuration;
            //prepare the path of our repository jason file
            _repositoryPath = _Configuration.GetSection("RepositoryPath").Value;
        }
        //inheritdoc 
        public FileResponse  Add(FileCreateRequest model)
        {
            var record=new FileResponse();
            //make a unique id
            record.Id = Guid.NewGuid().ToString();
            record.Title = model.File.FileName;
            //Converting size to KB
            record.Size =(float)Math.Round((decimal)(model.File.Length/1024),1);
            record.Type= model.File.ContentType;
            record.CreatedDate= DateTime.Now;
            List<FileResponse> source = new List<FileResponse>();
            //Get the latest records to append
            source = GetAll();

            //append the file to old list
            source.Add(record);
            string json = JsonSerializer.Serialize(source);
            //Upload the file to server
            var filePath = Path.GetTempFileName();

            using (var stream = System.IO.File.Create($"wwwroot/{model.File.FileName}"))
            {
                  model.File.CopyTo(stream);
            }

            //write the last added file's details to the repository
            System.IO.File.WriteAllText(_repositoryPath, json);
            return record;
        }

        //inheritdoc 
        public List<FileResponse> GetAll()
        {
            try
            {

                using (StreamReader r = new StreamReader(_repositoryPath))
                {
                    string json_content = r.ReadToEnd();
                    if (string.IsNullOrEmpty(json_content)) return new List<FileResponse>();
                    return JsonSerializer.Deserialize<List<FileResponse>>(json_content);

                }
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
    }
}
