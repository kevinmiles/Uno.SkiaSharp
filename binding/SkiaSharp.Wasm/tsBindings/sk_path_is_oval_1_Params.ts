/* TSBindingsGenerator Generated code -- this code is regenerated on each build */
namespace SkiaSharp
{
	export class sk_path_is_oval_1_Params
	{
		/* Pack=4 */
		cpath : number;
		boundsZero : number;
		public static unmarshal(pData:number, memoryContext: any = null) : sk_path_is_oval_1_Params
		{
			memoryContext = memoryContext ? memoryContext : Module;
			let ret = new sk_path_is_oval_1_Params();
			
			{
				ret.cpath = Number(memoryContext.getValue(pData + 0, "*"));
			}
			
			{
				ret.boundsZero = Number(memoryContext.getValue(pData + 4, "*"));
			}
			return ret;
		}
	}
}
