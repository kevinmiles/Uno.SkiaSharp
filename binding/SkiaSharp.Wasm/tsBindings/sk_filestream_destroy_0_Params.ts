/* TSBindingsGenerator Generated code -- this code is regenerated on each build */
namespace SkiaSharp
{
	export class sk_filestream_destroy_0_Params
	{
		/* Pack=4 */
		stream : number;
		public static unmarshal(pData:number, memoryContext: any = null) : sk_filestream_destroy_0_Params
		{
			memoryContext = memoryContext ? memoryContext : Module;
			let ret = new sk_filestream_destroy_0_Params();
			
			{
				ret.stream = Number(memoryContext.getValue(pData + 0, "*"));
			}
			return ret;
		}
	}
}
