/* TSBindingsGenerator Generated code -- this code is regenerated on each build */
namespace SkiaSharp
{
	export class sk_paint_set_dither_0_Params
	{
		/* Pack=4 */
		t : number;
		v : boolean;
		public static unmarshal(pData:number, memoryContext: any = null) : sk_paint_set_dither_0_Params
		{
			memoryContext = memoryContext ? memoryContext : Module;
			let ret = new sk_paint_set_dither_0_Params();
			
			{
				ret.t = Number(memoryContext.getValue(pData + 0, "*"));
			}
			
			{
				ret.v = Boolean(memoryContext.getValue(pData + 4, "i32"));
			}
			return ret;
		}
	}
}
