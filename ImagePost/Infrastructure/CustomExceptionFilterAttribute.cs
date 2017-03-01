using ImagePost.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ImagePost.Infrastructure
{
    public class CustomExceptionFilterAttribute : FilterAttribute, IExceptionFilter
    {
        public void OnException(ExceptionContext filterContext)
        {
            AjaxDTO dto = new AjaxDTO();
            dto.Success = false;
            dto.Message = filterContext.Exception.Message;

            filterContext.Result = new JsonResult() { Data = dto, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
            filterContext.ExceptionHandled = true;
        }
    }
}