/* TSBindingsGenerator Generated code -- this code is regenerated on each build */
namespace SkiaSharp
{
	export class sk_paint_get_text_intercepts_0_Params
	{
		/* Pack=4 */
		cpaint : number;
		text : number;
		byteLength : number;
		x : number;
		y : number;
		bounds_Length : number;
		bounds : Array<number>;
		intervals : number;
		public static unmarshal(pData:number, memoryContext: any = null) : sk_paint_get_text_intercepts_0_Params
		{
			memoryContext = memoryContext ? memoryContext : Module;
			let ret = new sk_paint_get_text_intercepts_0_Params();
			
			{
				ret.cpaint = Number(memoryContext.getValue(pData + 0, "*"));
			}
			
			{
				ret.text = Number(memoryContext.getValue(pData + 4, "*"));
			}
			
			{
				ret.byteLength = Number(memoryContext.getValue(pData + 8, "*"));
			}
			
			{
				ret.x = Number(memoryContext.getValue(pData + 12, "float"));
			}
			
			{
				ret.y = Number(memoryContext.getValue(pData + 16, "float"));
			}
			
			{
				ret.bounds_Length = Number(memoryContext.getValue(pData + 20, "i32"));
			}
			
			{
				var pArray = memoryContext.getValue(pData + 24, "*"); /*float 4 False*/
				if(pArray !== 0)
				{
					ret.bounds = new Array<number>();
					for(var i=0; i<ret.bounds_Length; i++)
					{
						var value = memoryContext.getValue(pArray + i * 4, "float");
						ret.bounds.push(Number(value));
					}
				}
				else
				
				{
					ret.bounds = null;
				}
			}
			
			{
				ret.intervals = Number(memoryContext.getValue(pData + 28, "*"));
			}
			return ret;
		}
	}
}
