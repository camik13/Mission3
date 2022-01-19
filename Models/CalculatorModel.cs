using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission_3.Models
{
    public class CalculatorModel
    {
        [Required]
        [Range(0,100)]
        public byte assign { get; set; }
        [Required]
        [Range(0, 100)]
        public byte project { get; set; }
        [Required]
        [Range(0, 100)]
        public byte quiz { get; set; }
        [Required]
        [Range(0, 100)]
        public byte exam { get; set; }
        [Required]
        [Range(0, 100)]
        public byte intex { get; set; }
    }
}
