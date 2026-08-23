using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using backend.Models;


namespace backend.document
{
    public class Document
    {
        public int id { get; } = Random.Shared.Next(1, 1000000);
        public bool type { get; set; }
        public int number {get;set;}  
        public string title {get;set;}
        public Client client  {get; set;}
    } 
}