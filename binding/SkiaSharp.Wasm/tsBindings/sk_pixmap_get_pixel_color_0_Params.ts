/* TSBindingsGenerator Generated code -- this code is regenerated on each build */
namespace SkiaSharp
{
	export class sk_pixmap_get_pixel_color_0_Params
	{
		/* Pack=4 */
		t : number;
		x : number;
		y : number;
		public static unmarshal(pData:number, memoryContext: any = null) : sk_pixmap_get_pixel_color_0_Params
		{
			memoryContext = memoryContext ? memoryContext : Module;
			let ret = new sk_pixmap_get_pixel_color_0_Params();
			
			{
				ret.t = Number(memoryContext.getValue(pData + 0, "*"));
			}
			
			{
				ret.x = Number(memoryContext.getValue(pData + 4, "i32"));
			}
			
			{
				ret.y = Number(memoryContext.getValue(pData + 8, "i32"));
			}
			return ret;
		}
	}
}
