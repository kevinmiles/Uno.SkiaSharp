/* TSBindingsGenerator Generated code -- this code is regenerated on each build */
namespace SkiaSharp
{
	export class sk_colorspace_new_rgb_with_gamma_named_0_Params
	{
		/* Pack=4 */
		gamma : number;
		toXYZD50 : number;
		public static unmarshal(pData:number, memoryContext: any = null) : sk_colorspace_new_rgb_with_gamma_named_0_Params
		{
			memoryContext = memoryContext ? memoryContext : Module;
			let ret = new sk_colorspace_new_rgb_with_gamma_named_0_Params();
			
			{
				ret.gamma = Number(memoryContext.getValue(pData + 0, "i32"));
			}
			
			{
				ret.toXYZD50 = Number(memoryContext.getValue(pData + 4, "*"));
			}
			return ret;
		}
	}
}
