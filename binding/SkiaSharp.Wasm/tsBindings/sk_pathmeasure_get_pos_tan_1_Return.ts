/* TSBindingsGenerator Generated code -- this code is regenerated on each build */
namespace SkiaSharp
{
	export class sk_pathmeasure_get_pos_tan_1_Return
	{
		/* Pack=4 */
		tangent : SkiaSharp.SKPoint;
		public constructor()
		{
			this.tangent = new SkiaSharp.SKPoint();
		}
		public marshalNew(memoryContext: any = null) : number
		{
			memoryContext = memoryContext ? memoryContext : Module;
			var pTarget = memoryContext._malloc(8);
			this.marshal(pTarget, memoryContext);
			return pTarget;
		}
		public marshal(pData:number, memoryContext: any = null)
		{
			memoryContext = memoryContext ? memoryContext : Module;
			this.tangent.marshal(pData + 0);
		}
	}
}
