/* TSBindingsGenerator Generated code -- this code is regenerated on each build */
namespace SkiaSharp
{
	export class sk_manageddrawable_set_delegates_0_Params
	{
		/* Pack=4 */
		pDraw : number;
		pGetBounds : number;
		pNewPictureSnapshot : number;
		public static unmarshal(pData:number, memoryContext: any = null) : sk_manageddrawable_set_delegates_0_Params
		{
			memoryContext = memoryContext ? memoryContext : Module;
			let ret = new sk_manageddrawable_set_delegates_0_Params();
			
			{
				ret.pDraw = Number(memoryContext.getValue(pData + 0, "*"));
			}
			
			{
				ret.pGetBounds = Number(memoryContext.getValue(pData + 4, "*"));
			}
			
			{
				ret.pNewPictureSnapshot = Number(memoryContext.getValue(pData + 8, "*"));
			}
			return ret;
		}
	}
}
