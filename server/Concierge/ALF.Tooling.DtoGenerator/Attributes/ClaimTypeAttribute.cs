using System;

namespace ALF.Shared.Dto.Attributes
{
	public class ClaimTypeAttribute : Attribute
	{
		public string ClaimType { get; }

		public ClaimTypeAttribute(string claimType)
		{
			ClaimType = !string.IsNullOrWhiteSpace(claimType) ? claimType : throw new ArgumentNullException(nameof(claimType));
		}
	}
}
