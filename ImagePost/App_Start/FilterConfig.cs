using ImagePost.Infrastructure;
using System.Web;
using System.Web.Mvc;

namespace ImagePost
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new CustomExceptionFilterAttribute());
            filters.Add(new HandleErrorAttribute());
        }
    }
}
