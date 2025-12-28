using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClassifiedsAPI.Models
{
    public class ClassifiedstoreDatabaseSettings : IClassifiedstoreDatabaseSettings // implements the interface
    {
        public string ClassifiedsCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IClassifiedstoreDatabaseSettings // interface
    {
        string ClassifiedsCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
