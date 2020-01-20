using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace DatingApp.Dtos
{
    public class UserForLoginDto
    {     
        [Required]
        public string username {  get;set;}
        [Required]
        [StringLength(8,MinimumLength =4, ErrorMessage ="Your must specify better paassword.")]
        public string password { get; set; }
    }
}
