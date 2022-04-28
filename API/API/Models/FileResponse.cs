namespace API.Models
{
    public class FileResponse
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Type { get; set; }
        public float Size { get; set; }

        public DateTime CreatedDate { get; set; }
    }
}