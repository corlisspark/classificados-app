using ClassifiedsAPI.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace ClassifiedsAPI.Services
{
    public class ClassifiedService
    {
        private readonly IMongoCollection<Classified> _classifieds;

        public ClassifiedService(IClassifiedstoreDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _classifieds = database.GetCollection<Classified>(settings.ClassifiedsCollectionName);
        }

        public List<Classified> Get() =>
            _classifieds.Find(classified => true).ToList();

        public Classified Get(string id) =>
            _classifieds.Find<Classified>(classified => classified.Id == id).FirstOrDefault();

        public Classified Create(Classified classified)
        {
            _classifieds.InsertOne(classified);
            return classified;
        }

        public void Update(string id, Classified classifiedIn) =>
            _classifieds.ReplaceOne(classified => classified.Id == id, classifiedIn);

        public void Remove(Classified classifiedIn) =>
            _classifieds.DeleteOne(classified => classified.Id == classifiedIn.Id);

        public void Remove(string id) =>
            _classifieds.DeleteOne(classified => classified.Id == id);

    }
}
