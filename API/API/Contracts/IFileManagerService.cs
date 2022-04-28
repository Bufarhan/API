using API.Models;

namespace API.Contracts
{
    public interface IFileManagerService
    {
        /// <summary>
        /// Returns all uploaded files
        /// </summary>
        /// <returns>List of FileResponse</returns>
        List<FileResponse> GetAll();

        /// <summary>
        /// Adds a file to the repository
        /// </summary>
        /// <param name="model">FileCreateRequest</param>
        /// <returns>FileResponse</returns>
        FileResponse Add(FileCreateRequest model);
    }
}
