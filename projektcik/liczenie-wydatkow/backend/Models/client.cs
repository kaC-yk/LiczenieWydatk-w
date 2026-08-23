using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System;
using backend.document;
namespace backend.Models
{
    public class Client
{
    [Required]
    public string name { get; set; }
    public string Email { get; set; }
    //??????????
    public string Password{ get;set; }

}
}
