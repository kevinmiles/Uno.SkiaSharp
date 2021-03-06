/* TSBindingsGenerator Generated code -- this code is regenerated on each build */
namespace SkiaSharp
{
	export class sk_imagefilter_new_point_lit_diffuse_0_Params
	{
		/* Pack=4 */
		location : SkiaSharp.SKPoint3;
		lightColor : SkiaSharp.SKColor;
		surfaceScale : number;
		kd : number;
		input : number;
		cropRect : number;
		public static unmarshal(pData:number, memoryContext: any = null) : sk_imagefilter_new_point_lit_diffuse_0_Params
		{
			memoryContext = memoryContext ? memoryContext : Module;
			let ret = new sk_imagefilter_new_point_lit_diffuse_0_Params();
			
			{
				ret.location = SkiaSharp.SKPoint3.unmarshal(pData + 0);
			}
			
			{
				ret.lightColor = SkiaSharp.SKColor.unmarshal(pData + 12);
			}
			
			{
				ret.surfaceScale = Number(memoryContext.getValue(pData + 16, "float"));
			}
			
			{
				ret.kd = Number(memoryContext.getValue(pData + 20, "float"));
			}
			
			{
				ret.input = Number(memoryContext.getValue(pData + 24, "*"));
			}
			
			{
				ret.cropRect = Number(memoryContext.getValue(pData + 28, "*"));
			}
			return ret;
		}
	}
}
