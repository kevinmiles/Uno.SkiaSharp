/* TSBindingsGenerator Generated code -- this code is regenerated on each build */
namespace SkiaSharp
{
	export class sk_bitmap_set_volatile_0_Params
	{
		/* Pack=4 */
		b : number;
		value : boolean;
		public static unmarshal(pData:number, memoryContext: any = null) : sk_bitmap_set_volatile_0_Params
		{
			memoryContext = memoryContext ? memoryContext : Module;
			let ret = new sk_bitmap_set_volatile_0_Params();
			
			{
				ret.b = Number(memoryContext.getValue(pData + 0, "*"));
			}
			
			{
				ret.value = Boolean(memoryContext.getValue(pData + 4, "i32"));
			}
			return ret;
		}
	}
}
