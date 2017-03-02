using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ImagePost.Models
{
    public class AjaxDTO
    {
        public AjaxDTO()
        {
            Success = true;
            Message = "Ok";
        }

        public bool Success { get; set; }
        public object Data { get; set; }
        public string Message { get; set; }
    }
}