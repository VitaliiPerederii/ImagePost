using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ImagePost.Startup))]
namespace ImagePost
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
