/* TSBindingsGenerator Generated code -- this code is regenerated on each build */
namespace SkiaSharp
{
	export class sk_canvas_rotate_radians_0_Params
	{
		/* Pack=4 */
		t : number;
		radians : number;
		public static unmarshal(pData:number, memoryContext: any = null) : sk_canvas_rotate_radians_0_Params
		{
			memoryContext = memoryContext ? memoryContext : Module;
			let ret = new sk_canvas_rotate_radians_0_Params();
			
			{
				ret.t = Number(memoryContext.getValue(pData + 0, "*"));
			}
			
			{
				ret.radians = Number(memoryContext.getValue(pData + 4, "float"));
			}
			return ret;
		}
	}
}
