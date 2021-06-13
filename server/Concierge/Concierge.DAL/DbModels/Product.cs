namespace Concierge.DAL.DbModels
{
    public class Product: DbModel, IDbModel
    {
        public string DisplayName { get; set; }
        public string Art { get; set; }
        public string Img { get; set; }
        public string DescriptionText { get; set; }
        public string DescriptionHTML { get; set; }

        public ProductExtended Extended { get; set; }
       
    }
}
