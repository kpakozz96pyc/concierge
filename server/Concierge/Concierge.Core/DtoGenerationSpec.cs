using Concierge.Core.Enums;
using System;
using System.Collections.Generic;
using System.Reflection;
using TypeGen.Core.SpecGeneration;
using TypeGen.Core.TypeAnnotations;

namespace Concierge.Core
{
    public class DtoGenerationSpec : GenerationSpec
    {
        static IEnumerable<Type> GetTypesWithExportToTS_Attribute(Assembly assembly)
        {
            foreach (Type type in assembly.GetTypes())
            {
                if (type.GetCustomAttributes(typeof(ExportTsClassAttribute), true).Length > 0)
                {
                    yield return type;
                }
            }
        }

        public DtoGenerationSpec()
        {          

            Type t = typeof(DtoGenerationSpec);
            Assembly assemFromType = t.Assembly;
            foreach (var clazz in GetTypesWithExportToTS_Attribute(assemFromType))
            {
                AddClass(clazz);
            }


            AddEnum<SeatType>();
            AddEnum<SeatStatus>();
        }
    }
}
