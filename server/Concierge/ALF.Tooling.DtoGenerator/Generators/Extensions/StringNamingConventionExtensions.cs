using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using Newtonsoft.Json.Serialization;

namespace ALF.DtoGenerator.Generators.Extensions
{
    public enum NamingConvention
    {
        PascalCase, // ExampleOfThisConvention
        CamelCase,  // exampleOfThisConvention
        KebabCase   // example-of-this-convention
    }

    public static class StringNamingConventionExtensions
    {   
        public static string ToPascalCase(this string input, NamingConvention fromConvention)
        {
            if (input == null)
                throw new ArgumentNullException(nameof(input));

            // Split the input into words according to convention and convert
            return SplitInput(input, fromConvention).ToPascalCase();            
        }

        public static string ToPascalCase(this IEnumerable<string> words)
        {
            if (words == null)
                throw new ArgumentNullException(nameof(words));
            
            // Ensure all the words are correctly cased - in this case every word should start with an uppercase letter
            var correctlyCasedWords = words.Select(word => word.ToLower().WithFirstLetterUppercase());

            // Combine all the words into a single string and return
            return string.Join("", correctlyCasedWords.ToArray());
        }

        public static string ToCamelCase(this string input, NamingConvention fromConvention)
        {
            if (input == null)
                throw new ArgumentNullException(nameof(input));

            // Split the input into words according to convention and convert
            return SplitInput(input, fromConvention).ToCamelCase();
        }

        public static string ToCamelCase(this IEnumerable<string> words)
        {
            if (words == null)
                throw new ArgumentNullException(nameof(words));
            
            // Ensure all the words are correctly case - in this case the first word is all lowercase and the rest of the words
            // should start with an uppercase letter
            var wordList = words.ToList();
            var correctlyCasedWords = new List<string>();
            for (var i = 0; i < wordList.Count; i++)
            {

                if (i == 0)
                {
                    correctlyCasedWords.Add(wordList[i].ToLower());
                }
                else
                {
                    correctlyCasedWords.Add(wordList[i].ToLower().WithFirstLetterUppercase());
                }                
            }

            // Combine all the words into a single string and return
            return string.Join("", correctlyCasedWords.ToArray());
        }
                
        public static string ToKebabCase(this string input, NamingConvention fromConvention)
        {
            // Split the input into words according to convention and convert
            return SplitInput(input, fromConvention).ToKebabCase();
        }

        public static string ToKebabCase(this IEnumerable<string> words)
        {
            if (words == null)
                throw new ArgumentNullException(nameof(words));

            // For this case all words are all lowercase, and separate by the - character
            return string.Join("-", words.Select(word => word.ToLower()));
        }
        
        public static string ToResolvedJsonName(this string input)
        {            
            var propertyResolver = new CamelCasePropertyNamesContractResolver();
            return propertyResolver.GetResolvedPropertyName(input);
        }

        public static string WithFirstLetterUppercase(this string input)
        {
            if (input == null)
                return null;

            if (input.Length > 1)
                return char.ToUpper(input[0]) + input.Substring(1);

            return input.ToUpper();
        }

        private static string[] SplitInput(string input, NamingConvention fromConvention)
        {
            if (input == null)
                throw new ArgumentNullException(nameof(input));

            switch (fromConvention)
            {
                case NamingConvention.PascalCase:
                case NamingConvention.CamelCase:
                    return SplitCamelOrPascalCase(input);
                case NamingConvention.KebabCase:
                    return SplitKebabCase(input);
                default:
                    throw new ArgumentException($"Unknown NamingConvention {fromConvention}", nameof(fromConvention));
            }
        }
        
        private static string[] SplitCamelOrPascalCase(string input)
        {
            return Regex.Replace(input, "[a-z][A-Z]", m => m.Value[0] + " " + char.ToLower(m.Value[1])).Split(' ');
        }

        private static string[] SplitKebabCase(string input)
        {
            return input.Split('-');
        }
        
    }
}
