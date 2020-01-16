using DatingApp.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace DatingApp.Controllers
{
    [ApiController]
    [Route("Api/[controller]")]
    public class HomeController : Controller
    {

        private readonly DataContext _datacontext;
        public HomeController(DataContext dataContext)
        {
            _datacontext = dataContext;
        }
        //public IActionResult Index()
        //{
        //    return View();
        //}
        //api/values
        public IActionResult Get()
        {

            var values = _datacontext.Values.ToList();
            return Ok(values);
        }

        //api/values
        [HttpGet("{id}")]
        public async Task<ActionResult> Get(int id)
        {

            var values = await _datacontext.Values.Where(x => x.Id == id).FirstOrDefaultAsync();
            

            return Ok(values);
        }
    }
}