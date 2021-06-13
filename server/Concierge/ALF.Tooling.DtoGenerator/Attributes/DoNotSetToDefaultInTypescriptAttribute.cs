using System;

namespace ALF.Shared.Dto.Attributes
{
    [AttributeUsage(AttributeTargets.Property)]
    public class DoNotSetToDefaultInTypescriptAttribute : Attribute
    {
    }
}