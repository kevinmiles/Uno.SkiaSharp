/* TSBindingsGenerator Generated code -- this code is regenerated on each build */
namespace SkiaSharp
{
	export class sk_imagefilter_new_point_lit_specular_0_Return
	{
		/* Pack=4 */
		location : SkiaSharp.SKPoint3;
		public constructor()
		{
			this.location = new SkiaSharp.SKPoint3();
		}
		public marshalNew(memoryContext: any = null) : number
		{
			memoryContext = memoryContext ? memoryContext : Module;
			var pTarget = memoryContext._malloc(12);
			this.marshal(pTarget, memoryContext);
			return pTarget;
		}
		public marshal(pData:number, memoryContext: any = null)
		{
			memoryContext = memoryContext ? memoryContext : Module;
			this.location.marshal(pData + 0);
		}
	}
}
