/* TSBindingsGenerator Generated code -- this code is regenerated on each build */
namespace SkiaSharp
{
	export class sk_typeface_open_stream_0_Return
	{
		/* Pack=4 */
		ttcIndex : number;
		public constructor()
		{
		}
		public marshalNew(memoryContext: any = null) : number
		{
			memoryContext = memoryContext ? memoryContext : Module;
			var pTarget = memoryContext._malloc(4);
			this.marshal(pTarget, memoryContext);
			return pTarget;
		}
		public marshal(pData:number, memoryContext: any = null)
		{
			memoryContext = memoryContext ? memoryContext : Module;
			memoryContext.setValue(pData + 0, this.ttcIndex, "i32");
		}
	}
}
