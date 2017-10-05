using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebAPIAngularNew.Controllers
{
    public class UserAPIController : ApiController
    {
        public List<string> Get()
        {
            List<string> lst = new List<string>();
            for (int i = 0; i < 30; i++)
            {
                lst.Add("TESTE " + i.ToString());
            }
            return lst;
        }
    }
}
