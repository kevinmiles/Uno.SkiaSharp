/* TSBindingsGenerator Generated code -- this code is regenerated on each build */
namespace SkiaSharp
{
	export class sk_surface_get_canvas_0_Params
	{
		/* Pack=4 */
		t : number;
		public static unmarshal(pData:number, memoryContext: any = null) : sk_surface_get_canvas_0_Params
		{
			memoryContext = memoryContext ? memoryContext : Module;
			let ret = new sk_surface_get_canvas_0_Params();
			
			{
				ret.t = Number(memoryContext.getValue(pData + 0, "*"));
			}
			return ret;
		}
	}
}
