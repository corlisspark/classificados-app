using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ClassifiedsAPI.Models
{
    public class Classified
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        public string title { get; set; }
        public string description { get; set; }
        public string date { get; set; }
    }
}
