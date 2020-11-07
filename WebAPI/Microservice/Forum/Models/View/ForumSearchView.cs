using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Forum.Models.View
{
    public class ForumSearchView
    {

        public int TotalItem { get; set; }
        public int TotalPage { get; set; }
        public int CurrentPage { get; set; }
        public int NbItemPerPage { get; set; }
        public string NameFilter { get; set; }
        public string DescFilter { get; set; }
        public List<ForumView> ForumSearch { get; set; }



    }
}
