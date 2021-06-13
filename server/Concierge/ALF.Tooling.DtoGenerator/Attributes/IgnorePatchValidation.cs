using System;

namespace ALF.Shared.Dto.Attributes
{
    [AttributeUsage(AttributeTargets.Parameter)]
    public class IgnorePatchValidation : Attribute
    {
    }
}
